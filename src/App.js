import {useState, useEffect} from 'react'
import { themes, ThemeContext } from './contexts/theme-context'
import PageWrapper from './components/PageWrapper'
import './styles/style.css'

function App() {
  const [darkThemeMQ] = useState(window.matchMedia("(prefers-color-scheme: dark)"))
  const [currentTheme, setCurrentTheme] = useState(themes.light);
  
  //console.log(darkThemeMQ)
  
  const toggleTheme = () => {
    setCurrentTheme((prevCurrentTheme) =>
      prevCurrentTheme === themes.light ? themes.dark : themes.light
    )
  }
  
  useEffect(() => {
    if (darkThemeMQ.matches) {
      //console.log("dark")
      setCurrentTheme(themes.dark)
    } else {
      //console.log("light")
      setCurrentTheme(themes.light)
    }
    
    console.log("darkThemeMQ.matches:")
    console.log(darkThemeMQ.matches)
  },[darkThemeMQ])
  
  return (
    <div className="global">
      <ThemeContext.Provider value={{theme: currentTheme, toggleTheme}}>
        <div className="app">
          <button onClick={() => toggleTheme()}>Toggle</button>
          <button onClick={() => setCurrentTheme(themes.dark)}>dark</button>
          <button onClick={() => setCurrentTheme(themes.light)}>light</button>
          <PageWrapper/>
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
