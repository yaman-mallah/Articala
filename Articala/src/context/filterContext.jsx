
import React, { createContext, useEffect, useState } from 'react'

export const FilterContext = createContext(null)

export const FilterProvider = ({ children }) => {
    const [globalCurrentCat, setGlobalCurrentCat] = useState(null)
    useEffect(() => {
        console.log(globalCurrentCat)
    }, [globalCurrentCat])

    return (
        <FilterContext.Provider value={{ setGlobalCurrentCat, globalCurrentCat }}>
            {children}
        </FilterContext.Provider>
    )
}

