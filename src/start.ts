import { Server } from './server';

const FASTIFY_PORT = Number(process.env.PORT) || 3306;

Server.listen(FASTIFY_PORT);

console.log(`🚀  Fastify server running on port ${FASTIFY_PORT}`);
