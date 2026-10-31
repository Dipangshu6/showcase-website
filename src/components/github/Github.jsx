import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

const Github = () => {
  // const [data, setdata] = useState({})

  const data = useLoaderData()
    
  // useEffect(() => {
  //   fetch("https://api.github.com/users/Dipangshu6")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setdata(data);
  //     }, []);
  // })

  return (
    <div className="flex justify-center bg-gray-400 p-6 text-2xl text-white">
      <img src={data.avatar_url} className="flex justify-center items-center w-20 h-20" alt="Profile Photo" />
      <span className='m-8'>Github Followers: {data.followers}</span>
    </div>
  );
}

export default Github

export const githubInfo = async () => {
  const response = await fetch("https://api.github.com/users/Dipangshu6");
  return response.json()
}