import CookieConsent from "../Components/CookieConsent"
import Features from "../Components/Features"
import Hero from "../Components/Hero"
import Links from "../Components/Links"
import Marketing from "../Components/Marketing"
import Navbar from "../Components/Navbar"


const App = () => {
  return (
   <main>
    <Navbar/>
    <Hero/>
    <Features/>
    <Links/>
    <Marketing/>
    <CookieConsent/>
   </main>
  )
}

export default App