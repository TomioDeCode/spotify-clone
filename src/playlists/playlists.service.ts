import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Playlist } from './playlist.entity';
import { Repository } from 'typeorm';
import { Song } from 'src/songs/song.entity';
import { User } from 'src/users/user.entity';
import { CreatePlayListDto } from './dto/create-playlists.dto';

@Injectable()
export class playListsService {
  constructor(
    @InjectRepository(Playlist)
    private playListRepo: Repository<Playlist>,
    @InjectRepository(Song)
    private songRepo: Repository<Song>,
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async create(playListDTO: CreatePlayListDto): Promise<Playlist> {
    const playList = new Playlist();
    playList.name = playListDTO.name;

    const songs = await this.songRepo.findByIds(playListDTO.songs);
    playList.songs = songs;

    const user = await this.userRepo.findOneBy({ id: playListDTO.user });
    playList.user = user;

    return this.playListRepo.save(playList);
  }
}
