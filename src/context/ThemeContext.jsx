import React, { createContext, useCallback, useEffect, useState } from 'react'

export const themeContext = createContext({
    theme: 'dark',
    toggleTheme: ()=> null
})

const ThemeContextProvider = ({children}) => {

    const [theme, setTheme] = useState(() => (localStorage.getItem('theme')) || 'dark')

    const toggleTheme = useCallback(()=> {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
    }, [])


    useEffect(()=> {
        localStorage.setItem("theme", theme)
    },[theme])


  return (
    <div>
        <themeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </themeContext.Provider>
    </div>
  )
}

export default ThemeContextProvider