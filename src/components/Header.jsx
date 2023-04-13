import {useContext} from 'react'
import { Context } from '../Context';

export default function Header(props) {
    // console.log('Header', props)
    const {darkmode, handleDarkMode} = useContext(Context);
  return (
    <header>
        <h1>Header</h1>
        <button
        onClick={handleDarkMode}>
            dark mode</button>
    </header>
  )
}
