import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Navbar from "./components/Navbar"

function App() {

  return (
    <h1 className="bg-black">
      <main>
        <Navbar />
        <Hero />
        <Highlights />
      </main>
    </h1>
  )
}

export default App
