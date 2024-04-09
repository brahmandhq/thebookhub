"use client";
import Loader from '@/components/Loader'
import React from 'react'

const loading = () => {
  return (
    <div className='bg-neutral-900  flex w-full h-screen justify-center items-center'>
    <Loader /></div>
  )
}

export default loading