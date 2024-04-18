import Header from '@/components/Header'
import MoreGenreButton from '@/components/MoreGenreButton'
import { PageWrapper } from '@/components/PageWrapper'
import { genres } from '@/data/genre'
import { getUniqueGenres } from '@/lib/books'
import React from 'react'

const page = async() => {

 const getAllGenres = await getUniqueGenres()


  return (
    <PageWrapper>
    <Header >
    <h1 className='text-md font-medium text-white mt-[5vh]'>Browsing Genres... </h1>
    </Header>
    <div className='mx-2 flex flex-col gap-2'>
      {
        getAllGenres.map((genre, index) => (
          <MoreGenreButton key={index} route={`genres/${genre.id}`} leftIcon={false} bookCount={genre.bookCount} title={genre.name} rightIcon={true}/>
        ))
      }
    </div>
    </PageWrapper>
    
 
  )
}

export default page