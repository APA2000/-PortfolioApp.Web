import { ProjectsRepository } from '../repositories';
import { createContext } from 'react';
import { ApiServiceFactory } from '../factories/ApiServiceFactory';

const projectsRepository = new ProjectsRepository({
    apiService: ApiServiceFactory.Instance
});

export const ProjectsContext = createContext({ projectsRepository });