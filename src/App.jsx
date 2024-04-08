
import './App.css'
import Home from "./views/Home"
import  ThemeContextProvider  from "./context/ThemeContext"


function App() {

  return (
    <>
    <ThemeContextProvider>
    <Home />
    </ThemeContextProvider>
    </>
  )
}

export default App
