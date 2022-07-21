import { Meme } from "./components/Meme"
import { Header } from "./components/Header"

import './styles/styles.css'

function App() {

  return (
    <div className="App">
      <Header/>
       <main>
        <Meme/>
       </main>
    </div>
  )
}

export default App
