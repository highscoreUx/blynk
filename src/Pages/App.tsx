import CookieConsent from "../Components/CookieConsent"
import Features from "../Components/Features"
import Hero from "../Components/Hero"
import Navbar from "../Components/Navbar"


const App = () => {
  return (
   <main>
    <Navbar/>
    <Hero/>
    <Features/>
    <CookieConsent/>
   </main>
  )
}

export default App