import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Put,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {
  constructor(private SongsService: SongsService) {}

  // Create Song
  @Post()
  create(@Body() CreateSongDTO: CreateSongDTO) {
    return this.SongsService.create(CreateSongDTO);
  }

  // Find All
  @Get()
  findAll() {
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
  findOne() {
    return 'Get One Song';
  }

  // Update By ID
  @Put(':id')
  update() {
    return 'Update One Song';
  }

  // Delete By ID
  @Delete(':id')
  delete() {
    return 'Delete One Song';
  }
}
