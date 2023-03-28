
import { useContext } from 'react'
import './App.css'
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher'
import { themeContext } from './context/ThemeContext'

function App() {
const {theme} = useContext(themeContext)
  return (
    <div className={`App color-${theme}`}>
    <header>
      <ThemeSwitcher/>
    </header>
  </div>
  )
}

export default App
