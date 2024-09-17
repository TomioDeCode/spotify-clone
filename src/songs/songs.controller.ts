import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private SongsService: SongsService) {}

  // Create Song
  @Post()
  create() {
    return this.SongsService.create('Anime By TomioDeCode');
  }

  // Find All
  @Get()
  findAll() {
    return this.SongsService.findAll();
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
