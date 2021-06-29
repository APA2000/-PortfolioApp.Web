import { useRef } from "react"

export const useViewModel = (ViewModelConstructor, args) => {
    let viewModelRef = useRef(null);

    if (!viewModelRef.current) {
        viewModelRef.current = new ViewModelConstructor(args);
    }

    return viewModelRef.current;
}