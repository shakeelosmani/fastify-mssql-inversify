import fastify from 'fastify';
import { Router } from './router';

const Server = fastify({
  logger: !!(process.env.NODE_ENV !== 'development')
});

Server.register(Router);

export { Server };
