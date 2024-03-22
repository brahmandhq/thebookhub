import React from 'react'
import { IoIosTimer } from "react-icons/io";
const AboutBook = ({data}: {data:any}) => {
    console.log("At the id", data)
  return (
    <div className='flex flex-col items-center md:flex-row md:items-stretch gap-8 p-6'>
        <div className='h-52 w-52 flex-none'>
            <img src={"/images/book1.jpg"} className='object-cover h-full w-full shadow-[5px_0_30px_0px_rgba(0,0,0,0.3)]'/>
        </div>
        <div className='flex flex-col justify-between'>
            <p className='flex flex-1 justify-center md:justify-start  items-end '>Chapters</p>
            <h1 className='md:text-5xl text-center md:text-left text-3xl font-bold block mt-2'>{data.name}</h1>
            
           
                <p className='text-center  md:text-left mt-3'>{data.author.firstName + " " + data.author.lastName}</p>
                <p className='text-center mt-5 md:text-left text-xs'>{data.description}</p>
                <div className='text-center mt-2 md:text-left md:justify-start flex gap-2 justify-center items-center'>
                <IoIosTimer /> 
                    <span className='font-bold'> about </span> {data.duration} hours ,
                    <span className='font-bold'>genre: </span> Thriller, Nice, Something ,
                    
                </div>
                <div className='flex gap-2'>
                    <div>
                   <span className='font-bold'>copyright year:</span>  {data.copyright_year} , 
                    </div>
                    <div>
                    <span className='font-bold'>total chapters:</span> {data.chapters.length}
                    </div>
                </div>
        


        </div>

    </div>
  )
}

export default AboutBook