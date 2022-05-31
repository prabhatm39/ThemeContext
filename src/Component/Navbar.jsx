import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

export const Navbar = () => {
    const {theme, toggleTheme, isLight} = useContext(ThemeContext)
  return (
    <div>
         <button onClick={toggleTheme}> Toggle {isLight ? 'Dark' : 'Light'}</button>
    </div>
  )
}
