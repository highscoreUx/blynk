import { useState } from "react"
import { getCookies } from "../utils/getSavedLinks"
import Container from "./Container"
import { useNavigate } from "react-router-dom"


const links = getCookies()
const domain  = window.location.origin



const Links = () => {
    const navigate = useNavigate()
    const linksPerPage = 6
    const [current, setCurrent] = useState(1)
    const indexOfLastLink = current * linksPerPage
    const sorted = links.slice(0,indexOfLastLink)
    
  return (
    <div className="py-6">
        <Container>
            <div>
               <div className="flex flex-col gap-2">
               <h2 className="text-[32px]">Your Links</h2>
               <p>Here are links you've shorten</p>
               </div>
               <div className="mt-4">
                
                <div className="grid grid-cols-1 gap-4 md:grid-cols-4">{sorted.length > 0 && sorted.map(({
                    //@ts-ignore
                    id}, index)=>{
                    return <div className="p-4 bg-white rounded-lg shadow-sm text-sm cursor-pointer hover:scale-105 transition-all duration-300" key={index} onClick={()=>{navigate(`/details?id=${id}`)}}>{`${domain}/${id}`}</div>
                })}</div>
               </div>

               {sorted && links.length> indexOfLastLink && <button className="bg-blue-700 text-white p-4 rounded-lg mt-4" onClick={()=>{
                setCurrent(current + 1)
               }}>See More links</button>}
            </div>
            {sorted.length === 0 && <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow">
            <h2 className="text-[32px]">No Links Added Yet</h2>
            <p className="text-sm">Please add a link to see posted links here</p>
            <a className="bg-blue-600 p-4 text-white mt-4 rounded-lg" href="#hero">Get started now</a>
            </div>}
        </Container>
    </div>
  )
}

export default Links