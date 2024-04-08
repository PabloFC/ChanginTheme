import { useThemeContext } from "../context/ThemeContext"


const Home = () => {

    const { darkMode, toggleDarkMode } = useThemeContext()


  return (
    <body className= {darkMode ? 'dark-mode' : 'light-mode'}>
        <div className="container" >
        <button onClick={toggleDarkMode}>Cambiar de tema</button>
        </div>
    </body>
  )
}

export default Home
