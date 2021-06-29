import { PublicRepository } from '../repositories';
import { createContext } from 'react';
import { ApiServiceFactory } from '../factories/ApiServiceFactory';

const publicRepository = new PublicRepository({
    apiService: ApiServiceFactory.Instance
});

export const PublicContext = createContext({ publicRepository });