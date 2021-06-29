import { useContext } from "react";
import { AboutMeContext } from '../contexts';

export const useAboutMeContext = () => {
    return useContext(AboutMeContext);
};