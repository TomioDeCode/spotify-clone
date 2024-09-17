import { Body, Controller, Post } from '@nestjs/common';
import { playListsService } from './playlists.service';
import { CreatePlayListDto } from './dto/create-playlists.dto';
import { Playlist } from './playlist.entity';

@Controller('playLists')
export class playListsController {
  constructor(private playListService: playListsService) {}

  @Post()
  create(
    @Body()
    playListDTO: CreatePlayListDto,
  ): Promise<Playlist> {
    return this.playListService.create(playListDTO);
  }
}
