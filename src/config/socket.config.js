import { Server } from 'socket.io';
import { productsUpdated, chat } from '../utils/socketUtils.js';
import { bronxLogger } from '../utils/logger.js';

export default function configureSocket(serverHttp, app) {
  const io = new Server(serverHttp);
  app.set('io', io);

  io.on('connection', socket => {
    bronxLogger('info', `New client connected ${socket.id}`);
    productsUpdated(io);
    chat(socket, io);
  });
}