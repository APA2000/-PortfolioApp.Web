import { createContext } from "react";
import { ApiServiceFactory } from "../factories/ApiServiceFactory";
import { SkillsRepository } from "../repositories";

const skillsRepository = new SkillsRepository({
    apiService: ApiServiceFactory.Instance
});

export const SkillsContext = createContext({skillsRepository});