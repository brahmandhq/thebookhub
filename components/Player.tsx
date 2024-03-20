
import React from 'react'
import PlayerContent from './PlayerContent';
import useBookStore from '@/store/book';

const Player = () => {

  // const currentBooks = useBookStore()
//   if (!song || (Object.keys(song).length === 0)) {
//     return;
// }

  return (
    <div className='fixed z-[99] bottom-0 bg-black w-full py-2 px-4 h-[80px]'>
      <PlayerContent />
    </div>
  )
}

export default Player