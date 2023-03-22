import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect} from 'react'

import Hero from '@/components/Hero'
import Section1 from '@/components/Section1'
import Section2 from '@/components/Section2'
import ReactPlayer from 'react-player/lazy'
import test from '@/assets/test'
import { motion } from 'framer-motion'
import Section3 from '@/components/Section3'
import Section4 from '@/components/Section4'
import Section5 from '@/components/Section5'
import Section6 from '@/components/Section6'
import Section7 from '@/components/Section7'
import Footer from '@/components/Footer'
import Loader from '@/components/Loader'
import { Player } from '@lottiefiles/react-lottie-player'



export default function Home() {

  useEffect(() => {
    import ('@dotlottie/player-component')
  })

  

 

  return (
    <>
      <Head>
        <title>Beekreed</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex flex-col bg-white'>
        <div className='w-[100%] text-black border-b-2 sticky bg-white border-[#00000005]'>
       <div className='p-[1rem] w-[100%] flex justify-center items-center'>
       <h1 className='border-black font-sans font-semibold px-[1rem] border-[3px]'>Beekreed</h1>
       </div>
       
       </div>
       {/* <Loader /> */}
       {/* <Hero />
       <Section1 /> */}
       <Section6 />
       {/* 
      
       
       <Section7 />
       <Section3 />
         
       
       <Section4 />
       <Section5 />
       <Footer /> */}
      </main>
    </>
  )
}
