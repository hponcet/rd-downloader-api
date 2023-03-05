import {
  qBittorrentClient,
  TorrentInfoParameters,
  TorrentAddParameters,
} from './qBitorrentRoutes';
const client = new qBittorrentClient();

const routes = {
  '/auth/login': (username: string, password: string) =>
    client.auth.login(username, password),
  '/auth/logout': () => client.auth.logout(),
  '/app/version': () => client.app.version(),
  '/app/webapiVersion': () => client.app.webapiVersion(),
  '/app/buildInfo': () => client.app.buildInfo(),
  '/app/shutdown': () => client.app.shutdown(),
  '/app/preferences': () => client.app.preferences(),
  '/app/setPreferences': (prefs) => client.app.setPreferences(prefs),
  '/app/defaultSavePath': () => client.app.defaultSavePath(),
  '/log/main': (params) => client.log.main(params),
  '/log/peers': (last_known_id: number) => client.log.peers(last_known_id),
  '/sync/maindata': (rid: number) => client.sync.maindata(rid),
  '/sync/torrentPeers': (hash: string, rid: number) =>
    client.sync.torrentPeers(hash, rid),
  '/transfer/info': () => client.transfer.info(),
  '/transfer/speedLimitsMode': () => client.transfer.speedLimitsMode(),
  '/transfer/toggleSpeedLimitsMode': () =>
    client.transfer.toggleSpeedLimitsMode(),
  '/transfer/downloadLimit': () => client.transfer.downloadLimit(),
  '/transfer/setDownloadLimit': (limit: number) =>
    client.transfer.setDownloadLimit(limit),
  '/transfer/uploadLimit': () => client.transfer.uploadLimit(),
  '/transfer/setUploadLimit': (limit: number) =>
    client.transfer.setUploadLimit(limit),
  '/transfer/banPeers': (peers: string | string[]) =>
    client.transfer.banPeers(peers),
  '/torrents/info': (params: Partial<TorrentInfoParameters>) =>
    client.torrents.info(params),
  '/torrents/properties': (hash: string) => client.torrents.properties(hash),
  '/torrents/trackers': (hash: string) => client.torrents.trackers(hash),
  '/torrents/webseeds': (hash: string) => client.torrents.webseeds(hash),
  '/torrents/files': (hash: string, indexes: string | number | string[]) =>
    client.torrents.files(hash, indexes),
  '/torrents/pieceStates': (hash: string) => client.torrents.pieceStates(hash),
  '/torrents/pieceHashes': (hash: string) => client.torrents.pieceHashes(hash),
  '/torrents/pause': (hashes: string | string[]) =>
    client.torrents.pause(hashes),
  '/torrents/resume': (hashes: string | string[]) =>
    client.torrents.resume(hashes),
  '/torrents/delete': (hashes: string | string[], deleteFiles: boolean) =>
    client.torrents.delete(hashes, deleteFiles),
  '/torrents/recheck': (hashes: string | string[]) =>
    client.torrents.recheck(hashes),
  '/torrents/reannounce': (hashes: string | string[]) =>
    client.torrents.reannounce(hashes),
  '/torrents/editTracker': (hash: string, origUrl: string, newUrl: string) =>
    client.torrents.editTracker(hash, origUrl, newUrl),
  '/torrents/removeTracker': (hash: string, urls: string | string[]) =>
    client.torrents.removeTracker(hash, urls),
  '/torrents/addPeers': (hashes: string | string[], peers: string | string[]) =>
    client.torrents.addPeers(hashes, peers),
  '/torrents/increasePrio': (hashes: string | string[]) =>
    client.torrents.increasePrio(hashes),
  '/torrents/decreasePrio': (hashes: string | string[]) =>
    client.torrents.decreasePrio(hashes),
  '/torrents/topPrio': (hashes: string | string[]) =>
    client.torrents.topPrio(hashes),
  '/torrents/bottomPrio': (hashes: string | string[]) =>
    client.torrents.bottomPrio(hashes),
  '/torrents/filePrio': (
    hash: string,
    id: string | number | string[] | number[],
    priority: number,
  ) => client.torrents.filePrio(hash, id, priority),
  '/torrents/downloadLimit': (hashes: string | string[]) =>
    client.torrents.downloadLimit(hashes),
  '/torrents/setDownloadLimit': (hashes: string | string[], limit: number) =>
    client.torrents.setDownloadLimit(hashes, limit),
  '/torrents/setShareLimits': (
    hashes: string | string[],
    ratioLimit: number,
    seedingTimeLimit: number,
  ) => client.torrents.setShareLimits(hashes, ratioLimit, seedingTimeLimit),
  '/torrents/uploadLimit': (hashes: string | string[]) =>
    client.torrents.uploadLimit(hashes),
  '/torrents/setUploadLimit': (hashes: string | string[], limit: number) =>
    client.torrents.setUploadLimit(hashes, limit),
  '/torrents/setLocation': (hashes: string | string[], location: string) =>
    client.torrents.setLocation(hashes, location),
  '/torrents/rename': (hash: string, name: string) =>
    client.torrents.rename(hash, name),
  '/torrents/setCategory': (hashes: string | string[], category: string) =>
    client.torrents.setCategory(hashes, category),
  '/torrents/categories': () => client.torrents.categories(),
  '/torrents/createCategory': (category: string, savePath: string) =>
    client.torrents.createCategory(category, savePath),
  '/torrents/editCategory': (category: string, savePath: string) =>
    client.torrents.editCategory(category, savePath),
  '/torrents/removeCategories': (categories: string | string[]) =>
    client.torrents.removeCategories(categories),
  '/torrents/addTags': (hashes: string | string[], tags: string | string[]) =>
    client.torrents.addTags(hashes, tags),
  '/torrents/removeTags': (
    hashes: string | string[],
    tags: string | string[],
  ) => client.torrents.removeTags(hashes, tags),
  '/torrents/tags': () => client.torrents.tags(),
  '/torrents/createTags': (tags: string | string[]) =>
    client.torrents.createTags(tags),
  '/torrents/deleteTags': (tags: string | string[]) =>
    client.torrents.deleteTags(tags),
  '/torrents/setAutoManagement': (hashes: string | string[], enable: boolean) =>
    client.torrents.setAutoManagement(hashes, enable),
  '/torrents/toggleSequentialDownload': (hashes: string[]) =>
    client.torrents.toggleSequentialDownload(hashes),
  '/torrents/toggleFirstLastPiecePrio': (hashes: string[]) =>
    client.torrents.toggleFirstLastPiecePrio(hashes),
  '/torrents/setForceStart': (hashes: string | string[], value: boolean) =>
    client.torrents.setForceStart(hashes, value),
  '/torrents/setSuperSeeding': (hashes: string | string[], value: boolean) =>
    client.torrents.setSuperSeeding(hashes, value),
  '/torrents/renameFile': (hash: string, oldPath: string, newPath: string) =>
    client.torrents.renameFile(hash, oldPath, newPath),
  '/torrents/renameFolder': (hash: string, oldPath: string, newPath: string) =>
    client.torrents.renameFolder(hash, oldPath, newPath),
  '/torrents/add': (torrent: string | string[] | TorrentAddParameters) =>
    client.torrents.add(torrent),
  '/search/start': (
    pattern: string,
    plugins: string | string[],
    category: string | string[],
  ) => client.search.start(pattern, plugins, category),
  '/search/stop': (id: number) => client.search.stop(id),
  '/search/status': (id?: number) => client.search.status(id),
  '/search/results': (id: number, limit: number, offset: number) =>
    client.search.results(id, limit, offset),
  '/search/delete': (id: number) => client.search.delete(id),
  '/search/plugins': () => client.search.plugins(),
  '/search/installPlugin': (sources: string | string[]) =>
    client.search.installPlugin(sources),
  '/search/uninstallPlugin': (names: string | string[]) =>
    client.search.uninstallPlugin(names),
  '/search/enablePlugin': (names: string | string[], enable: boolean) =>
    client.search.enablePlugin(names, enable),
  '/search/updatePlugins': () => client.search.updatePlugins(),
};

export { routes };
