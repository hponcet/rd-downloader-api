import { Router } from 'express';
import TorrentsController from '@controllers/torrents.controller';
import { CreateTorrentDto } from '@dtos/torrents.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class TorrentsRoute implements Routes {
  public path = '/torrents';
  public router = Router();
  public torrentsController = new TorrentsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.torrentsController.getTorrents);
    this.router.get(`${this.path}/:id`, this.torrentsController.getTorrentById);
    this.router.post(`${this.path}`, validationMiddleware(CreateTorrentDto, 'body'), this.torrentsController.createTorrent);
    this.router.put(`${this.path}/:id`, validationMiddleware(CreateTorrentDto, 'body', true), this.torrentsController.updateTorrent);
    this.router.delete(`${this.path}/:id`, this.torrentsController.deleteTorrent);
  }
}

export default TorrentsRoute;
