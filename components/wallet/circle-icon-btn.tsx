
import React from 'react'

export default function CircleIconBtn({icon, title}:any) {
  return (
    <div className='max-w-20 flex items-center justify-center flex-col text-center gap-2 cursor-pointer'>
        <div className='bg-card w-16 h-16 rounded-full flex items-center justify-center'>{icon}</div>
        <p className='text-white/75 text-xs'>{title}</p>
    </div>
  )
}
