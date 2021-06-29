import { useContext } from "react";
import { SkillsContext } from "../contexts";

export const useSkillsContext = () => {
    return useContext(SkillsContext);
}