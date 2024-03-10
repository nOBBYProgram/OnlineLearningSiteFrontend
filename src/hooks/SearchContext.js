import { createContext, useState } from "react";



const SearchContext = createContext()



export const SearchProvider = ({ children })=>{
    const [search,setSearch] = useState('')

const name = "saheel"

    return(
        <SearchContext.Provider value={{name,search,setSearch}}>
            { children }
      
        </SearchContext.Provider>
    )
}

export{SearchContext}