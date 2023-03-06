import { NextFunction, Request, Response } from 'express';
import { CreateTorrentDto } from '@dtos/torrents.dto';
import { Torrent } from '@interfaces/torrents.interface';
import torrentService from '@services/torrents.service';

class TorrentsController {
  public torrentService = new torrentService();

  public getTorrents = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllTorrentsData: Torrent[] = await this.torrentService.findAllTorrent();

      res.status(200).json({ data: findAllTorrentsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getTorrentById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const torrentId: string = req.params.id;
      const findOneTorrentData: Torrent = await this.torrentService.findTorrentById(torrentId);

      res.status(200).json({ data: findOneTorrentData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createTorrent = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const torrentData: CreateTorrentDto = req.body;
      const createTorrentData: Torrent = await this.torrentService.createTorrent(torrentData);

      res.status(201).json({ data: createTorrentData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateTorrent = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const torrentId: string = req.params.id;
      const torrentData: CreateTorrentDto = req.body;
      const updateTorrentData: Torrent = await this.torrentService.updateTorrent(torrentId, torrentData);

      res.status(200).json({ data: updateTorrentData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteTorrent = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const torrentId: string = req.params.id;
      const deleteTorrentData: Torrent = await this.torrentService.deleteTorrent(torrentId);

      res.status(200).json({ data: deleteTorrentData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default TorrentsController;
