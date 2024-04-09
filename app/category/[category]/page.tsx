import Books from '@/components/Books'
import Header from '@/components/Header'
import { PageWrapper } from '@/components/PageWrapper'
import { getBooksByGenre } from '@/lib/books'
import Head from 'next/head'
import React from 'react'

const page = async({params}: {params : {category: string}}) => {
    

    const books = await getBooksByGenre(params.category)
   


  return (
   <PageWrapper>
   <Header >
    <h1 className='text-md font-medium text-white mt-[5vh]'>You are searching for the category: <span className='text-lg font-bold text-white mt-[5vh]'>{params.category}</span> </h1>

   
   </Header>
   <div 
      className="
        grid 
        grid-cols-2 
        sm:grid-cols-3 
        md:grid-cols-3 
        lg:grid-cols-4 
        xl:grid-cols-4 
        2xl:grid-cols-5 
        gap-4
        mt-4
        p-4
        mb-[10vh]
      "
    >
      {books.map((item) => (
        <Books
      
          key={item.id} 
          data={item}
        />
      ))}
    </div>
   </PageWrapper>
  )
}

export default page