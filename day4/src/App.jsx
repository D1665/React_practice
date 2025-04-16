
import './App.css'
import axios from 'axios' //run command - npm install axios
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const[data,setdata]=useState([]) 
  const getdata=async()=>{

    const response= await axios.get('https://picsum.photos/v2/list?page=2&limit=10')
    setdata(response.data)
    console.log(data)
    
  }
  useEffect(()=>{
    getdata()
  }
  ,[]) // "React mein useEffect isliye use karte hain, taaki component render ke baad hum kuch aise kaam kar sakein jo browser ya external world se related ho — jaise API call, timer, storage, ya event listeners."
  return (
    <>
    <button onClick={getdata} type="button">Get data </button>
    <div className='container'>
      {
        data.map((item)=>{
          return(
            <div key={item.id} className='card'>
              <img src={item.download_url} alt="" />
              <h1>{item.author}</h1>
            </div>
          )
        })
      }
    </div>
      
     
      
    </>
  )
}

export default App
