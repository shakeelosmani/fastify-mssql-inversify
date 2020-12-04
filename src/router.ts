import { FastifyInstance } from 'fastify';
import { HealthCheckController } from './controllers/health-check/HealthCheckController';
import { AccountController } from './controllers/account/AccountController';

const Router = async (fastify: FastifyInstance) => {
  fastify.register(HealthCheckController, { prefix: '/api/v1/health-check' });
  fastify.register(AccountController, { prefix: '/api/v1/account' });
};

export { Router };
