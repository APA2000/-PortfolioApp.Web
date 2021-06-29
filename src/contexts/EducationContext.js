import { createContext } from "react";
import { ApiServiceFactory } from "../factories/ApiServiceFactory";
import { EducationRepository } from "../repositories";

const educationRepository = new EducationRepository({
    apiService: ApiServiceFactory.Instance
});

export const EducationContext = createContext({
    educationRepository
});