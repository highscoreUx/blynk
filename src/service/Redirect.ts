import { redirect } from "react-router-dom";
import { getLink } from "../service/api";

//@ts-ignore
export const Redirecter = async ({params}) => {
    const short = params.id;
    const data = await getLink(short)

    //@ts-ignore
 if (data && data[0]?.redirectUrl) {
        //@ts-ignore
        return redirect(data[0].redirectUrl);
    }
}

