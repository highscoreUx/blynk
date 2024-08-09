import { Link, useRouteError } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Container from "./Components/Container"


const ErrorPage = () => {
    const err = useRouteError() as any
    
  return (
    <main>
        <Navbar/>
        <Container>
            <div className="flex flex-col mt-4 items-center bg-white rounded-lg py-10">
            <h2 className="text-center">{err.message}</h2>
            <p className="mt-4">Please headback to a safe place</p>
            <Link to={"/"} className="bg-blue-700 text-white p-4 rounded-lg text-sm mt-8">Go to Homepage</Link>
            </div>
        </Container>
    </main>
  )
}

export default ErrorPage