import { useState } from "react"
import { getCookies } from "../utils/getSavedLinks"
import Container from "./Container"


const links = getCookies()
const domain  = window.location.origin



const Links = () => {
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
                
                <div className="flex gap-4 flex-wrap">{sorted.length > 1 && sorted.map(({
                    //@ts-ignore
                    id})=>{
                    return <a className="p-4 bg-white rounded-lg shadow-sm text-sm" href={`${domain}/${id}`} target="_blank">{`${domain}/${id}`}</a>
                })}</div>
               </div>

               {sorted && links.length> indexOfLastLink && <button className="bg-blue-700 text-white p-4 rounded-lg mt-4" onClick={()=>{
                setCurrent(current + 1)
               }}>See More links</button>}
            </div>
            {sorted.length === 0 && <div>
            <h2 className="text-[32px]">No Links Added Yet</h2>
            <p className="text-sm">Please add a link to see posted links here</p>
            </div>}
        </Container>
    </div>
  )
}

export default Links