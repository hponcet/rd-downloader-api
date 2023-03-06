import { IsNumber, IsString } from 'class-validator';

export class CreateAppBuilInfosDto {
  @IsNumber()
  public bitness?: number;

  @IsString()
  public boost?: string;

  @IsString()
  public libtorrent?: string;

  @IsString()
  public openssl?: string;

  @IsString()
  public qt?: string;

  @IsString()
  public zlib?: string;
}
