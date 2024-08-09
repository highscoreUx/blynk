import Cookies from "js-cookie";


export const getCookies = () => {
    const savedLinks = Cookies.get('savedLinks')
    const parsed = savedLinks? JSON.parse(savedLinks): []
    return parsed
}



export const getIndividLinks = (short: string)=> {
    const savedLinks = Cookies.get('savedLinks')
    const parsed = savedLinks? JSON.parse(savedLinks): []
    //@ts-ignore
    const deets = parsed.filter(({id})=>id===short)
    return deets
}