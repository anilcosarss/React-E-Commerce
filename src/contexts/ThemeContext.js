import { createContext, useEffect,useState } from "react";


export const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
    const [theme,setTheme] = useState("light");
    useEffect(() =>{
        if(theme==="dark") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark");
        }
    },[theme])
    const themeToggle = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };
    



    return <ThemeContext.Provider value={{themeToggle,theme}}>{children}</ThemeContext.Provider>


};

export default ThemeProvider;