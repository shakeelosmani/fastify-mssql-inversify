import { FastifyInstance } from 'fastify';
import { HealthCheckController } from './controllers/health-check/health-check';

const Router = async (fastify: FastifyInstance) => {
  fastify.register(HealthCheckController, { prefix: '/api/v1/health-check' });
};

export { Router };
