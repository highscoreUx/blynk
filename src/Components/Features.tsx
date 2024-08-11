import { features } from "../constants/features"
import Container from "./Container"


const Features = () => {
  return (
    <div className="bg-neutral-200">
        <Container className="py-8">
        <div>
            <div>
                <h2>Features</h2>
                <p>Catch some of our exciting features</p>
            </div>
            <div className="mt-4 flex flex-col gap-4 md:[&>*:nth-child(2)]:flex-row-reverse">
                {features.map(({title, descriptions, image}, index)=>{
                    return <div key={index} className="flex flex-col-reverse md:flex-row justify-between [&>*]:flex-1 gap-6 md:my-4 items-center">
                        <div>
                            <h2 className="text-[32px] mb-4">{title}</h2>
                            <div className="mt-1">
                                {descriptions.map(({description}, index)=>{
                                    return <div key={index}>
                              
                                        {description}</div>
                                })}
                            </div>
                        </div>
                        <div className="w-full">
                            {image}
                        </div>
                    </div>
                })}
            </div>
        </div>
        </Container>
    </div>
  )
}

export default Features