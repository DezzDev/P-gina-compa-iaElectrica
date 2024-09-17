import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system"

// props que recibe el provider
type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme ?: Theme
  storageKey?: string
}

// tipos del estado del provider
type ThemeProviderState ={
  theme : Theme
  setTheme : (theme: Theme) => void
}


// inicializamos el estado
const initialState : ThemeProviderState = {
  theme: "system",
  setTheme: ()=>null
}

// creamos el context del provider
const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "ui-theme",
  ...props
} : ThemeProviderProps){

  // establecemos el valor de theme, tomamos el valor de localStorage, 
  // si no existe valor se establece system
  const [theme, setTheme] = useState<Theme>(
    ()=> (localStorage.getItem(storageKey) as Theme) || defaultTheme
  )


  // establecemos el valor al elemento root
  useEffect(()=>{

    const root = window.document.documentElement

    root.classList.remove("light", "dark")

    if(theme === "system"){
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light"

      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)

  },[theme])


  const value = {
    theme,
    setTheme: (theme:Theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme) // este setTheme es del useState
    }
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}


export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if(context === undefined){
    throw new Error("useTheme must be used within a ThemeProvider")
  }

  return context
}


