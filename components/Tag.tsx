import React from 'react'

const Tag = ({title}: {title:string}) => {
  return (
    <div className='text-sm bg-slate-300 text-zinc-900 p-1 px-2 rounded-md'>{title}</div>
  )
}

export default Tag