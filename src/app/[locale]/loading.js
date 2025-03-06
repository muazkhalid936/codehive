"use client";
import React, { useEffect } from 'react'
import useStore from '../../store/useUserStore';
const loading = () => {
    const {setLanguage} = useStore();
    useEffect(() => {
        setLanguage(localStorage.getItem("language") || "en")
    }
    , [])
  return (
    <div className='flex justify-center items-center h-screen bg-[#000B17]'>

     <div className="spinner"></div>
    </div>
)
}

export default loading