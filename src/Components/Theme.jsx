import {createContext,useContext,useState} from 'react';
// create the context for theme
const ThemeContext=createContext(undefined);
//provide the context for theme

export const ThemeProvider=({children})=>{
    const [theme,setTheme]=useState("dark")
    return <ThemeContext.Provider
    value={{theme,toggleTheme:()=>setTheme(theme==="dark"?"light":"dark")}}
    >

        {children}
    </ThemeContext.Provider>
}
//use the theme

export const useTheme=()=>useContext(ThemeContext);