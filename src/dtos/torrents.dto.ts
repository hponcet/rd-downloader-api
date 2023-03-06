import { IsString, IsNumber } from 'class-validator';

export class CreateTorrentDto {
  @IsNumber()
  public addition_date?: number;

  @IsString()
  public comment?: string;

  @IsNumber()
  public completion_date?: number;

  @IsString()
  public created_by?: string;

  @IsNumber()
  public creation_date?: number;

  @IsNumber()
  public dl_limit?: number;

  @IsNumber()
  public dl_speed?: number;

  @IsNumber()
  public dl_speed_avg?: number;

  @IsNumber()
  public eta?: number;

  @IsNumber()
  public last_seen?: number;

  @IsNumber()
  public nb_connections?: number;

  @IsNumber()
  public nb_connections_limit?: number;

  @IsNumber()
  public peers?: number;

  @IsNumber()
  public peers_total?: number;

  @IsNumber()
  public piece_size?: number;

  @IsNumber()
  public pieces_have?: number;

  @IsNumber()
  public pieces_num?: number;

  @IsNumber()
  public reannounce?: number;

  @IsString()
  public save_path?: string;

  @IsNumber()
  public seeding_time?: number;

  @IsNumber()
  public seeds?: number;

  @IsNumber()
  public seeds_total?: number;

  @IsNumber()
  public share_ratio?: number;

  @IsNumber()
  public time_elapsed?: number;

  @IsNumber()
  public total_downloaded?: number;

  @IsNumber()
  public total_downloaded_session?: number;

  @IsNumber()
  public total_size?: number;

  @IsNumber()
  public total_uploaded?: number;

  @IsNumber()
  public total_uploaded_session?: number;

  @IsNumber()
  public total_wasted?: number;

  @IsNumber()
  public up_limit?: number;

  @IsNumber()
  public up_speed?: number;

  @IsNumber()
  public up_speed_avg?: number;
}
