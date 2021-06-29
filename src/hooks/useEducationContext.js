import { useContext } from "react"
import { EducationContext } from "../contexts"

export const useEducationContext = () => {
    return useContext(EducationContext);
}