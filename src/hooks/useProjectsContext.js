import { useContext } from "react";
import { ProjectsContext } from '../contexts';

export const useProjectsContext = () => {
    return useContext(ProjectsContext);
};