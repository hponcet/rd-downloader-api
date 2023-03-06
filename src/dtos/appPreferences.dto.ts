import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateAppPreferencesDto {
  @IsString()
  public add_trackers?: string;

  @IsBoolean()
  public add_trackers_enabled?: boolean;

  @IsNumber()
  public alt_dl_limit?: number;

  @IsNumber()
  public alt_up_limit?: number;

  @IsBoolean()
  public alternative_webui_enabled?: boolean;

  @IsString()
  public alternative_webui_path?: string;

  @IsString()
  public announce_ip?: string;

  @IsBoolean()
  public announce_to_all_tiers?: boolean;

  @IsBoolean()
  public announce_to_all_trackers?: boolean;

  @IsBoolean()
  public anonymous_mode?: boolean;

  @IsNumber()
  public async_io_threads?: number;

  @IsNumber()
  public auto_delete_mode?: number;

  @IsBoolean()
  public auto_tmm_enabled?: boolean;

  @IsBoolean()
  public autorun_enabled?: boolean;

  @IsString()
  public autorun_program?: string;

  @IsString()
  public banned_IPs?: string;

  @IsNumber()
  public bittorrent_protocol?: number;

  @IsString()
  public bypass_auth_subnet_whitelist?: string;

  @IsBoolean()
  public bypass_auth_subnet_whitelist_enabled?: boolean;

  @IsBoolean()
  public bypass_local_auth?: boolean;

  @IsBoolean()
  public category_changed_tmm_enabled?: boolean;

  @IsNumber()
  public checking_memory_use?: number;

  @IsBoolean()
  public create_subfolder_enabled?: boolean;

  @IsString()
  public current_interface_address?: string;

  @IsString()
  public current_network_interface?: string;

  @IsBoolean()
  public dht?: boolean;

  @IsNumber()
  public disk_cache?: number;

  @IsNumber()
  public disk_cache_ttl?: number;

  @IsNumber()
  public dl_limit?: number;

  @IsBoolean()
  public dont_count_slow_torrents?: boolean;

  @IsString()
  public dyndns_domain?: string;

  @IsBoolean()
  public dyndns_enabled?: boolean;

  @IsString()
  public dyndns_password?: string;

  @IsNumber()
  public dyndns_service?: number;

  @IsString()
  public dyndns_username?: string;

  @IsNumber()
  public embedded_tracker_port?: number;

  @IsBoolean()
  public enable_coalesce_read_write?: boolean;

  @IsBoolean()
  public enable_embedded_tracker?: boolean;

  @IsBoolean()
  public enable_multi_connections_from_same_ip?: boolean;

  @IsBoolean()
  public enable_os_cache?: boolean;

  @IsBoolean()
  public enable_piece_extent_affinity?: boolean;

  @IsBoolean()
  public enable_super_seeding?: boolean;

  @IsBoolean()
  public enable_upload_suggestions?: boolean;

  @IsNumber()
  public encryption?: number;

  @IsString()
  public export_dir?: string;

  @IsString()
  public export_dir_fin?: string;

  @IsNumber()
  public file_pool_size?: number;

  @IsBoolean()
  public incomplete_files_ext?: boolean;

  @IsBoolean()
  public ip_filter_enabled?: boolean;

  @IsString()
  public ip_filter_path?: string;

  @IsBoolean()
  public ip_filter_trackers?: boolean;

  @IsBoolean()
  public limit_lan_peers?: boolean;

  @IsBoolean()
  public limit_tcp_overhead?: boolean;

  @IsBoolean()
  public limit_utp_rate?: boolean;

  @IsNumber()
  public listen_port?: number;

  @IsString()
  public locale?: string;

  @IsBoolean()
  public lsd?: boolean;

  @IsBoolean()
  public mail_notification_auth_enabled?: boolean;

  @IsString()
  public mail_notification_email?: string;

  @IsBoolean()
  public mail_notification_enabled?: boolean;

  @IsString()
  public mail_notification_password?: string;

  @IsString()
  public mail_notification_sender?: string;

  @IsString()
  public mail_notification_smtp?: string;

  @IsBoolean()
  public mail_notification_ssl_enabled?: boolean;

  @IsString()
  public mail_notification_username?: string;

  @IsNumber()
  public max_active_downloads?: number;

  @IsNumber()
  public max_active_torrents?: number;

  @IsNumber()
  public max_active_uploads?: number;

  @IsNumber()
  public max_connec?: number;

  @IsNumber()
  public max_connec_per_torrent?: number;

  @IsNumber()
  public max_ratio?: number;

  @IsNumber()
  public max_ratio_act?: number;

  @IsBoolean()
  public max_ratio_enabled?: boolean;

  @IsNumber()
  public max_seeding_time?: number;

  @IsBoolean()
  public max_seeding_time_enabled?: boolean;

  @IsNumber()
  public max_uploads?: number;

  @IsNumber()
  public max_uploads_per_torrent?: number;

  @IsNumber()
  public outgoing_ports_max?: number;

  @IsNumber()
  public outgoing_ports_min?: number;

  @IsBoolean()
  public pex?: boolean;

  @IsBoolean()
  public preallocate_all?: boolean;

  @IsBoolean()
  public proxy_auth_enabled?: boolean;

  @IsString()
  public proxy_ip?: string;

  @IsString()
  public proxy_password?: string;

  @IsBoolean()
  public proxy_peer_connections?: boolean;

  @IsNumber()
  public proxy_port?: number;

  @IsBoolean()
  public proxy_torrents_only?: boolean;

  @IsNumber()
  public proxy_type?: number;

  @IsString()
  public proxy_username?: string;

  @IsBoolean()
  public queueing_enabled?: boolean;

  @IsBoolean()
  public random_port?: boolean;

  @IsBoolean()
  public recheck_completed_torrents?: boolean;

  @IsBoolean()
  public resolve_peer_countries?: boolean;

  @IsBoolean()
  public rss_auto_downloading_enabled?: boolean;

  @IsNumber()
  public rss_max_articles_per_feed?: number;

  @IsBoolean()
  public rss_processing_enabled?: boolean;

  @IsNumber()
  public rss_refresh_interval?: number;

  @IsString()
  public save_path?: string;

  @IsBoolean()
  public save_path_changed_tmm_enabled?: boolean;

  @IsNumber()
  public save_resume_data_interval?: number;

  public scan_dirs?: unknown;

  @IsNumber()
  public schedule_from_hour?: number;

  @IsNumber()
  public schedule_from_min?: number;

  @IsNumber()
  public schedule_to_hour?: number;

  @IsNumber()
  public schedule_to_min?: number;

  @IsNumber()
  public scheduler_days?: number;

  @IsBoolean()
  public scheduler_enabled?: boolean;

  @IsNumber()
  public send_buffer_low_watermark?: number;

  @IsNumber()
  public send_buffer_watermark?: number;

  @IsNumber()
  public send_buffer_watermark_factor?: number;

  @IsNumber()
  public slow_torrent_dl_rate_threshold?: number;

  @IsNumber()
  public slow_torrent_inactive_timer?: number;

  @IsNumber()
  public slow_torrent_ul_rate_threshold?: number;

  @IsNumber()
  public socket_backlog_size?: number;

  @IsBoolean()
  public start_paused_enabled?: boolean;

  @IsNumber()
  public stop_tracker_timeout?: number;

  @IsString()
  public temp_path?: string;

  @IsBoolean()
  public temp_path_enabled?: boolean;

  @IsBoolean()
  public torrent_changed_tmm_enabled?: boolean;

  @IsNumber()
  public up_limit?: number;

  @IsNumber()
  public upload_choking_algorithm?: number;

  @IsNumber()
  public upload_slots_behavior?: number;

  @IsBoolean()
  public upnp?: boolean;

  @IsNumber()
  public upnp_lease_duration?: number;

  @IsBoolean()
  public use_https?: boolean;

  @IsNumber()
  public utp_tcp_mixed_mode?: number;

  @IsString()
  public web_ui_address?: string;

  @IsNumber()
  public web_ui_ban_duration?: number;

  @IsBoolean()
  public web_ui_clickjacking_protection_enabled?: boolean;

  @IsBoolean()
  public web_ui_csrf_protection_enabled?: boolean;

  @IsString()
  public web_ui_domain_list?: string;

  @IsBoolean()
  public web_ui_host_header_validation_enabled?: boolean;

  @IsString()
  public web_ui_https_cert_path?: string;

  @IsString()
  public web_ui_https_key_path?: string;

  @IsNumber()
  public web_ui_max_auth_fail_count?: number;

  @IsNumber()
  public web_ui_port?: number;

  @IsBoolean()
  public web_ui_secure_cookie_enabled?: boolean;

  @IsNumber()
  public web_ui_session_timeout?: number;

  @IsBoolean()
  public web_ui_upnp?: boolean;

  @IsString()
  public web_ui_username?: string;
}
