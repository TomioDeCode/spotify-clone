import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Playlist } from './playlist.entity';
import { Song } from 'src/songs/song.entity';
import { User } from 'src/users/user.entity';
import { playListsService } from './playlists.service';
import { playListsController } from './playlists.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Playlist, Song, User])],
  controllers: [playListsController],
  providers: [playListsService],
})
export class PlaylistModule {}
