"use client";
import { createContext, useContext, useState } from "react";
const searchContext = createContext();
export default function SearchProvider({children}){
    const [searchTerm, setSearchTerm] = useState('');
    return(
        <>
            <searchContext.Provider value={{searchTerm, setSearchTerm}}>
            {children}
            </searchContext.Provider>
        </>
    )
}
export function useSearch(){
    const context = useContext(searchContext)
    if (!context) {
        throw new Error('Use Search term idk')
    }
    return context
}