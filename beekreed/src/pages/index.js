import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect} from 'react'

import Hero from '@/components/Hero'
import Section1 from '@/components/Section1'
import Section2 from '@/components/Section2'
import ReactPlayer from 'react-player/lazy'
import test from '@/assets/test'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Section3 from '@/components/Section3'
import Section4 from '@/components/Section4'
import Section5 from '@/components/Section5'
import Section6 from '@/components/Section6'
import Sectionteam from '@/components/Sectionteam'
import Section7 from '@/components/Section7'
import Footer from '@/components/Footer'
import Hero1 from '@/components/Hero1'
import Loader from '@/components/Loader'
import { Player } from '@lottiefiles/react-lottie-player'




export default function Home() {
 const [loading, setLoading] = useState(true)

  useEffect(() => {
    import ('@dotlottie/player-component')
  })
  
  useEffect(()=> {
    setTimeout(() => {
      setLoading(false);
    }, 7800);
  })

 

  return (
    <>
      <Head>
        <title>Beekreed</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex flex-col h-[100%] bg-white'>
      
       {/* {loading ? <Loader /> : (
        <> */}
      <Header />
      <Hero1 />
      <Section1 />
      <Section6 />
      <Section7 />
      <Sectionteam />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
      {/* </>
       )} */}
       
      
       {/* 
       
         
        */}
       
       
      
      </main>
    </>
  )
}
