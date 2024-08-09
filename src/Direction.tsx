import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { getLink } from "./service/api"
import { useEffect } from "react"

const Direction = () => {

    const short = useParams().id

const {data} = useQuery({
    queryKey: ['url', short],
    queryFn: ()=>{
       return getLink(short as string);
    }, 
    enabled: !!short,    
})


useEffect(()=>{
    if(data){
        //@ts-ignore
        const redirectURL = data[0]?.redirectUrl;
        if(redirectURL){
            window.location.replace(redirectURL)
        }
    }
},[data])




  return null
}

export default Direction