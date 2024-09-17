import { Controller, Delete, Get, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {
  // Find All
  @Get()
  findAll() {
    return 'Get All Songs';
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
