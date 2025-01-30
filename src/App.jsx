import Feature from "./components/Feature"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Pricing from "./components/Pricing"
import Worflow from "./components/Worflow"

function App() {

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <Feature />
        <Worflow />
        <Pricing />
      </div>
    </>
  )
}

export default App
