import Content from './components/Content'
import Welcome from './components/Welcome'
import {useState} from 'react'

function App() {
    const [welcome, setWelcome] = useState(true)

    return (
        <>
            {welcome ? <Welcome /> : <Content />}
        </>
    )
}
export default App
