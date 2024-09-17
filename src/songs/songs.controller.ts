import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Scope,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';
import { Connection } from '../../dist/common/constant/connection';

@Controller({ path: 'songs', scope: Scope.REQUEST })
export class SongsController {
  constructor(
    private SongsService: SongsService,
    @Inject('CONNECTION')
    private connection: Connection,
  ) {
    console.log(this.connection);
  }

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
  findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return `Get One Song On Id: ${typeof id}`;
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
