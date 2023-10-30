import productsRouter from './products.router.js';
import cartsRouter from './carts.router.js';
import messagesRouter from './messages.router.js';
import viewsRouter from './views.router.js';
import sessionsRouter from './sessions.router.js';
import loggerRouter from './logger.router.js';

export default function configureRoutes(app) {
  app.use('/api/alive', (req, res) => {
    res.status(200).json({ status: 1, message: 'backend is alive' });
  });

  app.use('/api/sessions', sessionsRouter);
  app.use('/api/products', productsRouter);
  app.use('/api/carts', cartsRouter);
  app.use('/api/messages', messagesRouter);
  app.use('/api/logger', loggerRouter);
  app.use('/', viewsRouter);
}