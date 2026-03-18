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
    <div className='mx-auto max-w-lg'>
      <h1>Generate your short URLs</h1>
      <div>
        <input 
            type="text"
            className='p-4 focus:outline-purple-600' 
            placeholder='Enter your URL' 
            onChange={handleChange} />
        <input 
            type="text"
            className='p-4 focus:outline-purple-600' 
            placeholder='Enter your preferred short URL' 
            onChange={handleChange} />
        <button>Generate</button>
      </div>
    </div>
  )
}

export default Shorten
