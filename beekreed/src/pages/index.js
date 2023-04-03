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
import Overlay from '@/components/Overlay'
import Footer from '@/components/Footer'
import Hero1 from '@/components/Hero1'
import Loader from '@/components/Loader'
import { Player } from '@lottiefiles/react-lottie-player'

import { createClient } from "next-sanity";




export default function Home({post}) {
 const [loading, setLoading] = useState(true)
 const [open, setOpen] = useState(false)

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
      <Header open={() => setOpen(!open)} />
      <Hero1 />
      { open? <Overlay close={() => setOpen(!open)} /> : null }
      <Section1 />
      <Section6 />
      <Section7 />
      
      <Section3 />
      <Section4 post={post} />
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

const client = createClient({
  projectId: "btynjh54",
  dataset: "production",
  apiVersion: "2023-04-03",
  useCdn: false,
  token: "sk2xzUUXgX6faoPOe5zLKKGjpGXvtbbazWi8iWOWhWqfejLeoAEDOx4YCqmjv9KmHjAve6UamPknIlZY8w2Bdkb8KhD7uD5Qt5GeczS0wdDsw45VoM1iOtd0Hjj7Ic1j5onYHgsGE8dA5BdjeCodlZZRuvtJ3D1lRKLqPBE52GuMTrJt4BSK"
});

export async function getStaticProps() {
  // It's important to default the slug so that it doesn't return "undefined"
  const postFields = `
  _id,
  name,
  title,
  date,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
`
  const post = await client.fetch(`
  *[_type == "post"] | order(date desc, _updatedAt desc) {
    ${postFields}
  }`)

  return {
    props: {
      post
    }
  }
}
