import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export const Github = () => {
    const data = useLoaderData()
    // const [data, SetData] = useState([]);
    // useEffect(() =>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //    .then(response => response.json())
    //    .then(data=>{
    //     SetData(data)
    //    })
    // },[])
  return (
    <div>Github: {data.followers}
    <img src={data.avatar_url} alt="github image"  width={300}/>
    </div>
  )
}
export const githubInfoLoader =  async ()=>{
        const response = await fetch('https://api.github.com/users/hiteshchoudhary')
        return response.json()
        
}
