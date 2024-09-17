import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePlayListDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  @IsArray()
  @IsNumber({}, { each: true })
  readonly songs: Array<number>;

  @IsNumber()
  @IsNotEmpty()
  readonly user: number;
}
