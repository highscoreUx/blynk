import { useMutation } from '@tanstack/react-query';
import Container from './Container'
import { motion } from 'framer-motion'
import { createLink } from '../service/api';
import React, { useRef, useState } from 'react';
import generateID from '../service/generateID';
import toast from 'react-hot-toast';
import { FcOk } from 'react-icons/fc';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import HeroImage from '../assets/HeroImage';

const Hero = () => {
    const diaref = useRef<HTMLDialogElement | null>(null)
    const navigate = useNavigate()
 
    const {mutate} = useMutation({
        mutationFn: ({ red, id }: { red: string; id: string }) => {
            return createLink(red, id); 
          }, 
          onSuccess: (data)=>{
            toast(<div className='flex items-center justify-center gap-2'><FcOk /> Created Successfully</div>)
            const savedLinks = Cookies.get('savedLinks')
            const existingLinks = savedLinks? JSON.parse(savedLinks): []
            //@ts-ignore
            const newLink = {url: data[0].redirectUrl, id: data[0].short, timeStamp: Date.now()}
            const updatedLinks = [...existingLinks, newLink]
            Cookies.set('savedLinks', JSON.stringify(updatedLinks), {expires: 365})
            //@ts-ignore
            navigate(`/details?id=${data[0].short}`)

            setRedirectUrl("")
            diaref.current?.close()
          }
    })
    const [redirectUrl, setRedirectUrl] = useState("")
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const id = generateID()
        mutate({red:redirectUrl, id})
    }
    return (
        <Container className='my-10 flex items-center '>
            <div className='flex flex-col gap-6 [&>*]:flex-1 md:flex-row items-center'>
                <div className='flex flex-col gap-2 items-start'>
                    <h1>Blynk Your Links <br /> in a Flash!</h1>
                    <p className='text-[1.125rem]'>Transform your lengthy URLs into sleek, shareable links with Blynk — your one-stop tool for quick and effortless link shortening!</p>
                    <motion.button className='bg-blue-700 text-white p-4 rounded-lg mt-4 text-sm focus:outline-blue-300/30 focus:outline-2' whileHover={{ scale: 1.05, y: -1.5 }} whileTap={{ scale: 1.02 }} onClick={()=>{
                        diaref.current?.showModal()
                    }}>Create New Link</motion.button>
                </div>
                <div className='w-full'><HeroImage/></div>
            </div>
            <dialog ref={diaref} className='w-full md:w-[400px] p-4 rounded-lg'>
                <div className='mb-3'><h3>URL Details</h3>
                <p className='text-sm'>Fill in all fields to create a short link</p></div>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col'>
                    <label htmlFor="url" className='mb-2'>Url</label>
                    <input type="url" name="url" id="url" required value={redirectUrl} onChange={(e) => { setRedirectUrl(e.currentTarget.value) }} className='bg-neutral-100 p-4 rounded-lg mb-2 focus:outline-none' placeholder='https://'/>
                    </div>
                    <motion.button className='bg-blue-700 text-white p-4 rounded-lg mt-4 text-sm w-full transition-colors duration-300' whileHover={{ scale: 1.05, y: -1.5 }} whileTap={{ scale: 1.02 }} disabled={!redirectUrl}>Submit</motion.button>
                </form>
            </dialog>
        </Container>
    )
}

export default Hero