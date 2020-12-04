import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';

const HealthCheckController = async (fastify: FastifyInstance) => {
  fastify.get('/', async (_request: FastifyRequest, reply: FastifyReply) => {
    reply.send({ message: 'I am alive.' });
  });
};

export { HealthCheckController };
