import { useState } from 'react'
import Page from './components/page'
import { Context } from './Context';
import './App.css'

function App() {
  const [darkmode, setDarkMode] = useState(false);
  const handleDarkMode = () => {
    setDarkMode(!darkmode);
    console.log(darkmode);
  }
  return (
    //Context가 하위 컴포넌트들에게 state를 제공
    <Context.Provider value={{ darkmode, setDarkMode }}>
      <Page darkmode={darkmode}
      handleDarkMode={handleDarkMode}
      />
    </Context.Provider>
  )
}

export default App
