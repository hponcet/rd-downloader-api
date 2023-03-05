import express, { Express, Request, Response } from 'express';
import { routes } from './connectToAPI';

const app: Express = express();
const port = process.env.PORT || 8000;

for (const [route, func] of Object.entries(routes)) {
  app.post(route, (req: Request, res: Response) => {
    console.log(route, req.body);
  });
}

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
