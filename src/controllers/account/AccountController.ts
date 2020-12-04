import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { AccountService } from '../../services/AccountService';
import { container } from '../../config/DIConfig';

const AccountController = async (fastify: FastifyInstance) => {
  fastify.get('/', async (_request: FastifyRequest, reply: FastifyReply) => {
    const accountService = container.get(AccountService);
    reply.send({ accounts: await accountService.getAllAccounts() });
  });
};

export { AccountController };
