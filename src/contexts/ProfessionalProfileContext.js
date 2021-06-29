import { ProfessionalProfileRepository } from '../repositories';
import { createContext } from 'react';
import { ApiServiceFactory } from '../factories/ApiServiceFactory';

const professionalProfileRepository = new ProfessionalProfileRepository({
    apiService: ApiServiceFactory.Instance
});

export const ProfessionalProfileContext = createContext({ professionalProfileRepository });