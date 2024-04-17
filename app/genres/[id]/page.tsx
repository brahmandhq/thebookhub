import Books from '@/components/Books'
import Header from '@/components/Header'
import { PageWrapper } from '@/components/PageWrapper'
import { getBooksByGenreId, getGenreNameById } from '@/lib/books'
import React from 'react'

const page = async({params}: {params : {id: string}}) => {

   
    const name = await getGenreNameById(parseInt(params.id))
    const getAllBooks = await getBooksByGenreId(parseInt(params.id))


   

    if(!getAllBooks) return (
      <PageWrapper>
        <div className='m-2'>
        <p className='text-xl font-bold'>No Book Found</p>

        </div>
      </PageWrapper>
    )
  return (
   <PageWrapper>
   <Header >
    <p className='pt-3 font-semibold text-gray-300'>You're browsing for {name ?  name : "No Genre Found"}</p>
   </Header>
   <div className='m-2'>
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
      {getAllBooks.map((item) => (
        <Books
      
          key={item.id} 
          data={item}
        />
      ))}
    </div>

   </div>
   </PageWrapper>
  )
}

export default page