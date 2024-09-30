import { createContext,useContext } from "react";


const ThemeContext = createContext({
    theme: 'light',
    darktheme: ()=>{},
    lighttheme: ()=>{}
})


export  {ThemeContext};

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}