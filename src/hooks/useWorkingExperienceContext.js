import { useContext } from "react";
import { WorkingExperienceContext } from "../contexts";

export const useWorkingExperienceContext = () => {
    return useContext(WorkingExperienceContext);
}