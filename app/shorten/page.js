"use client"
import React from 'react'
import { useState } from 'react'

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setgenerated] = useState("")

    const handleChange = ()=>{

    }
  return (
    <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
      <h1 className='font-bold text-2xl'>Generate your short URLs</h1>
      <div className='flex flex-col gap-4'>
        <input 
            type="text"
            className='px-4 py-2 focus:outline-purple-600 rounded-md bg-white' 
            placeholder='Enter your URL' 
            onChange={handleChange} />
        <input 
            type="text"
            className='px-4 py-2 focus:outline-purple-600 rounded-md bg-white' 
            placeholder='Enter your preferred short URL' 
            onChange={handleChange} />
        <button className="bg-purple-500 shadow-lg px-3 py-1 font-bold rounded-lg text-white my-2">Generate</button>
      </div>
    </div>
  )
}

export default Shorten
