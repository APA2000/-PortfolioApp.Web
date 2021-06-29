import { useContext } from "react";
import { ProfessionalProfileContext } from '../contexts';

export const useProfessionalProfileContext = () => {
    return useContext(ProfessionalProfileContext);
};