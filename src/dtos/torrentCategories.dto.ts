import { IsString } from 'class-validator';

export class CreateTorrentCategoryDto {
  @IsString()
  public name: string;

  @IsString()
  public save_path: string;
}
