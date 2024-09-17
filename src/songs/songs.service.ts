import { Injectable } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Song } from './song.entity';
import { CreateSongDTO } from './dto/create-song-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateSongDto } from './dto/update-song-dto';
import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';
import { Artist } from 'src/artist/artist.entity';

@Injectable()
export class SongsService {
  constructor(
    @InjectRepository(Song)
    private songsRepository: Repository<Song>,
    @InjectRepository(Artist)
    private artistsRepository: Repository<Artist>,
  ) {}

  // Save The Song In DB
  async create(songDTO: CreateSongDTO): Promise<Song> {
    const song = new Song();
    song.title = songDTO.title;
    song.artists = songDTO.artist;
    song.duration = songDTO.duration;
    song.lyrics = songDTO.lyrics;
    song.releasedDate = songDTO.releaseDate;

    const artists = await this.artistsRepository.findByIds(songDTO.artist);
    song.artists = artists;

    return this.songsRepository.save(song);
  }

  // Find All Song In DB
  findAll(): Promise<Song[]> {
    return this.songsRepository.find();
  }

  // FInd One Song In DB
  findOne(id: number): Promise<Song> {
    return this.songsRepository.findOneBy({ id });
  }

  // Update One Song In DB
  update(id: number, recordToUpdate: UpdateSongDto): Promise<UpdateResult> {
    return this.songsRepository.update(id, recordToUpdate);
  }

  // Remove One Song In DB
  remove(id: number): Promise<DeleteResult> {
    return this.songsRepository.delete(id);
  }

  // Paginate Data Limit 10
  async paginate(options: IPaginationOptions): Promise<Pagination<Song>> {
    const queryBuilder = this.songsRepository.createQueryBuilder('c');
    queryBuilder.orderBy('c.releasedDate', 'DESC');

    return paginate<Song>(queryBuilder, options);
  }
}
