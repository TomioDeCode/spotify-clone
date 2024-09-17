import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  // Local DB
  // Local Array

  private readonly songs = [];

  // Save The Song In DB
  create(song) {
    this.songs.push(song);
    return this.songs;
  }

  // Find All Song In DB
  findAll() {
    return this.songs;
  }
}
