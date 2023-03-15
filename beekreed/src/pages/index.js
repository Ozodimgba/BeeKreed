import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import ReactPlayer from 'react-player/lazy'
import test from '@/assets/test'



export default function Home() {

  const qualities =[
    {
      title: "Beekreed Agency"
    },
    {
      title: "Communicate, innovate, create."
    },
    
  ]
  return (
    <>
      <Head>
        <title>Beekreed</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white h-[100%] w-[100%] flex flex-col justify-center'>
       <Hero />
       <section className='flex flex-col items-start pt-[4%] px-[5%]  h-[100vh]'>
        <div className='pr-[30%] '>
        <h3 className='font-sans text-[2.2rem]'>The synergy of human expertise and emerging technology allows us to deliver custom experiences that boost our client's growth.</h3>
        </div>
        <div className='w-[100%] flex justify-end mt-[4rem]'>
        <div className='w-[20rem] h-[20rem] text-white mr-[1rem] py-[4%] px-[3%] bg-black'>
          <h1 className='font-semibold font-sans text-[1.5rem] '>Web Design</h1>
          <p className='font-normal font-sans mt-[1rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada cursus hac sit sem enim, euismod. Libero lectus</p>
        </div>
        <div className='w-[20rem] h-[20rem] text-white py-[4%] px-[3%] bg-black'>
          <h1 className='font-semibold font-sans text-[1.5rem] '>Web Design</h1>
          <p className='font-normal font-sans mt-[1rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada cursus hac sit sem enim, euismod. Libero lectus</p>
        </div>
        </div>
        
        </section> 
      <section className='flex flex-col items-center pt-[4%] h-[100vh]'>
      
      <div className='w-[100%] h-[30rem] bg-black text-white overflow-scroll flex  items-end'>
        <div className='w-[100%] h-[80%] flex flex-col justify-center overflow-hidden justify-self-end '>
          
          <motion.h1 
          initial={{opacity: 0}}
          animate={{y: ['8rem', '-4rem', '-4rem', '-12rem'], opacity: [0 , 1, 1]}}
          transition={{duration: 5, repeat:  Infinity}}
          className='font-sans font-semibold text-white text-[4.5rem] pl-[10%] mb-[4rem]'>Beekreed Agency</motion.h1>
        
        </div>
      </div>
      </section>
      <section className='w-[100%] h-[100vh] px-[3%] py-[5%] bg-[#9a23f0]'>
      <div className=' pr-[50%]'>
        <div className='h-[10px] w-[10px] mb-[5px] rounded-[50%] bg-white'></div>
      <div className='w-[100%] h-[100%] py-[8%] border-y-[#ffffff60] text-white border-x-[#00000000] border-[1px]'>
        <h2 className='font-sans font-semibold text-[2.5rem]'>Branding</h2>
        <p className='font-sans font-light text-[1.3rem] mt-[1rem]'>Working with startups to build memorable brands from the ground up or established businesses to refresh and modernize.</p>
      </div>
      </div>
      </section>
      <section className='h-[100vh] w-[100%] bg-black px-[3%]'>
        <h3 className='font-sans font-semibold text-white text-[5rem]'>the latest.</h3>
         <div className='border-white border-b-[0.5px] py-[3%] text-white flex flex-row'>
         <h3 className='font-sans text-[#ac41f8] font-normal'>News</h3>
         <p className='font-sans px-[5%] text-white font-normal'> Beekreed it's time to creed the fact of life</p>
         </div>
         <div className='border-white border-b-[0.5px] py-[3%] text-white flex flex-row'>
         <h3 className='font-sans text-[#ac41f8] font-normal'>News</h3>
         <p className='font-sans px-[5%] text-white font-normal'> Beekreed it's time to creed the fact of life</p>
         </div>
      </section>
      <section className='h-[100vh] w-[100%] bg-[#1652f0] px-[3%]'>
       
      </section>
      </main>
    </>
  )
}
