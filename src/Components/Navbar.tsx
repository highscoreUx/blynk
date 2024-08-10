import { Link } from "react-router-dom"
import Container from "./Container"


const Navbar = () => {
  return (
    <div className="bg-white py-4 h-[80px] border-b sticky inset-x-0 top-0 z-50">
        <Container className="flex items-center h-full">
            <Link to={"/"}><span className="font-black text-[28px] text-blue-600 tracking-tight">Blynk</span> </Link>
        </Container>
    </div>
  )
}

export default Navbar