"use client"

import React, {createContext, useContext, useEffect, useState} from 'react'


type Theme = "light"|"dark";


type ThemeContextProviderProps = {
    children : React.ReactNode;
}

type ThemeContextType = {
    theme : Theme
    toggleTheme : () => void
}

const ThemeContext = createContext<ThemeContextType | null>(null);


export default function ThemeContextProvider( {children} : ThemeContextProviderProps) {

    const [theme, setTheme] = useState<Theme>("light");

    const toggleTheme = () => {
        if(theme === "light") {
            setTheme("dark");
            window.localStorage.setItem("theme","dark");
            document.documentElement.classList.add("dark");
        } else {
            setTheme("light")
            window.localStorage.setItem("theme","light");
            document.documentElement.classList.remove("dark");
        }
    };

    useEffect(()=> {
        const localStorageTheme  = window.localStorage.getItem("theme") as Theme | null;

        if(localStorageTheme) {
            setTheme(localStorageTheme);

            if(localStorageTheme === "dark") {
                document.documentElement.classList.add("dark");
            } 
        } else if(window.matchMedia("(prefers-color-schme:dark)").matches) {
            setTheme("dark")
            document.documentElement.classList.add("dark");
        }

    }, []);

  return (
      <ThemeContext.Provider
      value={{
        theme,
        toggleTheme
      }}
      >
        {children}
      </ThemeContext.Provider>
  )
}


export function useTheme() {

    const context = useContext(ThemeContext);

    if(context === null){
        throw new Error("UseThme must be used within a ThemeContextProvider");
    } 
    return context;
}
