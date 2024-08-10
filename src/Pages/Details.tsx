import { useLocation } from "react-router-dom"
import Navbar from "../Components/Navbar"
import { getIndividLinks } from "../utils/getSavedLinks"
import Container from "../Components/Container";
import { IoCopyOutline } from "react-icons/io5";
import toast from "react-hot-toast";
import CookieConsent from "../Components/CookieConsent";



const Details = () => {
    const location = useLocation();
    const param = new URLSearchParams(location.search)
    const short = param.get('id')


    if (!short) throw new Error("Something went wrong")

    const det = getIndividLinks(short)
    console.log(det[0])
    return (
        <main>
            <Navbar />
            <Container>
                <div className="mt-10 p-4 bg-white rounded-lg">
                    <div className="mb-4">
                        <h3>Link Details</h3>
                        <p>Here's the detail of your link</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col items-start gap-1">
                            <p className="bg-neutral-100 p-2 rounded-lg text-sm w-[100px] text-center">Url</p>
                            <p className="w-[70%] truncate">{det[0]?.url}</p>
                        </div>
                        <div className="flex flex-col items-start gap-1">
                            <p className="bg-neutral-100 p-2 rounded-lg text-sm w-[100px] text-center">Shortlink</p>

                            <div className="flex gap-1 items-center">
                            <a href={`${window.location.origin}/${det[0]?.id}`} target="_blank">{window.location.origin}/{det[0]?.id}</a>
                            <div className="p-2 bg-neutral-100 rounded-lg cursor-pointer hover:bg-blue-700 hover:text-white transition-all duration-200" onClick={()=>{
                                navigator.clipboard.writeText(`${window.location.origin}/${det[0]?.id}`).then(
                                    //@ts-ignore
                                    toast("Copied!")
                                )
                            }}>
                            <IoCopyOutline />
                            </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-1">
                            <p className="bg-neutral-100 p-2 rounded-lg text-sm w-[100px] text-center">Expiry</p>
                            <p>{det[0]?.timeStamp}</p>
                        </div>


                    </div>
                </div>
            </Container>
            <CookieConsent/>
        </main>
    )
}

export default Details