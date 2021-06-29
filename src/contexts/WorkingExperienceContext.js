import { createContext } from "react";
import { ApiServiceFactory } from "../factories/ApiServiceFactory";
import {
    WorkingExperienceRepository
} from "../repositories";

const workingExperienceRepository = new WorkingExperienceRepository({
    apiService: ApiServiceFactory.Instance
});

export const WorkingExperienceContext = createContext({
    workingExperienceRepository
});