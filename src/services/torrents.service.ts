import { hash } from 'bcrypt';
import { CreateTorrentDto } from '@dtos/torrents.dto';
import { HttpException } from '@exceptions/HttpException';
import { Torrent } from '@interfaces/torrents.interface';
import torrentModel from '@models/torrents.model';
import { isEmpty } from '@utils/util';

class TorrentService {
  // public torrents = torrentModel;

  public async findAllTorrent(): Promise<Torrent[]> {
    const torrents: Torrent[] = await torrentModel.find();
    return torrents;
  }

  public async findTorrentById(torrentId: string): Promise<Torrent> {
    if (isEmpty(torrentId)) throw new HttpException(400, 'TorrentId is empty');

    const findTorrent: Torrent = await torrentModel.findOne({ _id: torrentId });
    if (!findTorrent) throw new HttpException(409, "Torrent doesn't exist");

    return findTorrent;
  }

  public async createTorrent(torrentData: CreateTorrentDto): Promise<Torrent> {
    if (isEmpty(torrentData)) throw new HttpException(400, 'torrentData is empty');

    const findTorrent: Torrent = await torrentModel.findOne({ email: torrentData.email });
    if (findTorrent) throw new HttpException(409, `This email ${torrentData.email} already exists`);

    const hashedPassword = await hash(torrentData.password, 10);
    const createTorrentData: Torrent = await torrentModel.create({ ...torrentData, password: hashedPassword });

    return createTorrentData;
  }

  public async updateTorrent(torrentId: string, torrentData: CreateTorrentDto): Promise<Torrent> {
    if (isEmpty(torrentData)) throw new HttpException(400, 'torrentData is empty');

    if (torrentData.email) {
      const findTorrent: Torrent = await torrentModel.findOne({ email: torrentData.email });
      if (findTorrent && findTorrent._id != torrentId) throw new HttpException(409, `This email ${torrentData.email} already exists`);
    }

    if (torrentData.password) {
      const hashedPassword = await hash(torrentData.password, 10);
      torrentData = { ...torrentData, password: hashedPassword };
    }

    const updateTorrentById: Torrent = await torrentModel.findByIdAndUpdate(torrentId, { torrentData });
    if (!updateTorrentById) throw new HttpException(409, "Torrent doesn't exist");

    return updateTorrentById;
  }

  public async deleteTorrent(torrentId: string): Promise<Torrent> {
    const deleteTorrentById: Torrent = await torrentModel.findByIdAndDelete(torrentId);
    if (!deleteTorrentById) throw new HttpException(409, "Torrent doesn't exist");

    return deleteTorrentById;
  }
}

export default TorrentService;
