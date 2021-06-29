import { AboutMeRepository } from '../repositories';
import { createContext } from 'react';
import { ApiServiceFactory } from '../factories/ApiServiceFactory';

const aboutMeRepository = new AboutMeRepository({
    apiService: ApiServiceFactory.Instance
});

export const AboutMeContext = createContext({ aboutMeRepository });