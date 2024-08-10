import Container from "./Container"


const Marketing = () => {
  return (
    <div className="bg-blue-50 py-10">
        <Container className="text-blue-950 flex flex-col items-center gap-2">
            <h2 className="text-center text-[24px] md:text-[32px]">Ready to Make Short Links Quickly?</h2>
            <p className=" text-center">Join over 2000 users and begin making private short links without regiseteration</p>
            <a className="bg-blue-600 p-4 text-white mt-4 rounded-lg" href="#hero">Get Started For Free</a>
        </Container>
    </div>
  )
}

export default Marketing