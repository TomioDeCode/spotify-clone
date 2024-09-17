import { Playlist } from 'src/playlists/playlist.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firsName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Playlist, (playList) => playList.user)
  playlist: Playlist[];
}
