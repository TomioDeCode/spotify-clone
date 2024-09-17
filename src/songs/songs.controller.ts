import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Scope,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';
import { Song } from './song.entity';
import { DeleteResult, UpdateResult } from 'typeorm';
import { UpdateSongDto } from './dto/update-song-dto';

@Controller({ path: 'songs', scope: Scope.REQUEST })
export class SongsController {
  constructor(private SongsService: SongsService) {}

  // Create Song
  @Post()
  create(@Body() CreateSongDTO: CreateSongDTO): Promise<Song> {
    return this.SongsService.create(CreateSongDTO);
  }

  // Find All
  @Get()
  findAll(): Promise<Song[]> {
    try {
      return this.SongsService.findAll();
    } catch (error) {
      throw new HttpException(
        'Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: error,
        },
      );
    }
  }

  // Find By ID
  @Get(':id')
  findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return this.SongsService.findOne(id);
  }

  // Update By ID
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSongDTO: UpdateSongDto,
  ): Promise<UpdateResult> {
    return this.SongsService.update(id, updateSongDTO);
  }

  // Delete By ID
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
    return this.SongsService.remove(id);
  }
}
