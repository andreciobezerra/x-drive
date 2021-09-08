import { readFileSync } from "fs";
import https from 'https';
import { logger } from './logger.js';

const server = https.createServer(
  {
    key: readFileSync('./certificates/key.pem'),
    cert: readFileSync('./certificates/cert.pem')
  },
  (req, res) => res.end('Hello world!')
);

server.listen(process.env.PORT ?? 3000, () => {
  const { address, port } = server.address();
  logger.info(`App running at https://${address}:${port}`);
});
