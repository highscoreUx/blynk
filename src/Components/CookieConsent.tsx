import { useEffect, useState } from "react"
import Cookies from 'js-cookie'
import Container from "./Container";


const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);


    useEffect(()=>{
        const consent = Cookies.get('cookie_consent')
        if(!consent){
            setIsVisible(true)
        }
    },[])

    
  return (
    <div>
        {isVisible && <div className="bg-white py-4 fixed bottom-0 inset-x-0 border-t">
        <Container>
        <div>
            <p className="text-sm w-full md:w-[70%]">This website uses cookies to ensure you get the best experience. Would you like to accept all cookies? If you click 'No', we will only use the necessary cookies.</p>
            <div className="flex gap-2 mt-2">
            <button className="text-sm bg-blue-700 p-3 rounded-lg text-white" onClick={()=>{Cookies.set('cookie_consent','accepted',{expires: 365}); setIsVisible(false)}}>Accept Cookies</button>
            <button className="text-sm bg-blue-200 p-3 rounded-lg text-blue-950" onClick={()=>{Cookies.set('cookie_consent','accepted',{expires: 365}); setIsVisible(false)}}>Decline Cookies</button>
            </div>
        </div>
        </Container>
    </div>}
    </div>
  )
}

export default CookieConsent