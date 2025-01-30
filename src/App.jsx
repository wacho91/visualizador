import Feature from "./components/Feature"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Pricing from "./components/Pricing"
import Testimonial from "./components/Testimonial"
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
        <Testimonial />
        <Footer />
      </div>
    </>
  )
}

export default App
