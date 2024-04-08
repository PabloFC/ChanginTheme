/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react"
import { useState } from "react"
import { useContext } from "react"



export const ThemeContext= createContext({
    darkMode: false,
    setDarkMode: () => {}
})

export default function ThemeContextProvider({children}) {
    const [darkMode, setDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    return <ThemeContext.Provider value={{darkMode,setDarkMode, toggleDarkMode}}>{children}</ThemeContext.Provider>
    }

    export function useThemeContext() {
        return useContext(ThemeContext)
    }