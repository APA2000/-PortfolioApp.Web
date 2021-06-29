import { useContext } from "react";
import { PublicContext } from "../contexts";

export const usePublicContext = () => {
    return useContext(PublicContext);
}