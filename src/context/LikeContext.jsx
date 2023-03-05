import { createContext, useState } from "react";

export const LikeContext = createContext();

export default function LikeContextProvider({ children }) {
    
    //Aquí va la lógica
    const [filled, setFilled] = useState({})
    const [pic, setPic] = useState([]);

    return (
        <LikeContext.Provider value={{pic, setPic , filled: filled, setFilled: setFilled}}>
            {children}
        </LikeContext.Provider>
    )
}