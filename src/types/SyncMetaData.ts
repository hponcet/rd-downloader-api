import { SyncMetaDataServerState } from './SyncMetaDataServerState';
import { TorrentCategory } from './TorrentCategory';
import { TorrentInfo } from './TorrentInfo';

export interface SyncMetaData {
  categories?: Record<string, TorrentCategory>;
  full_update?: boolean;
  rid?: number;
  server_state?: SyncMetaDataServerState;
  tags?: Object[];
  torrents?: Record<string, TorrentInfo>;
  trackers?: Record<string, string[]>;
}
