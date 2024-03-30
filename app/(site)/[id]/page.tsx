import AboutBook from '@/components/AboutBook'
import HeaderPlaylist from '@/components/HeaderPlaylist'
import { PageWrapper } from '@/components/PageWrapper'
import PlaylistMain from '@/components/PlaylistMain'
import { getBookById } from '@/lib/books'
import React from 'react'
const page = async ({params}: {params : {id: string}}) => {
const getBook= await getBookById(params.id)


  return (
    <PageWrapper className="
    bg-neutral-900 
    rounded-lg 
    h-full 
    w-full
    overflow-hidden 
    overflow-y-auto
  ">
    <HeaderPlaylist >
    
        {getBook && <AboutBook data={getBook}/> }
        {getBook && <PlaylistMain data={getBook.chapters} idN={params.id!} img={getBook.imageLink!} name={getBook.name}/> }
        
    </HeaderPlaylist>
  </PageWrapper>
  )
}

export default page