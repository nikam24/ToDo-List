import React from 'react'

export default function Navbar() {
  return (
    <div className='flex flex-row justify-between ml-2'>
      <div className='flex flex-row space-x-3 m-1'>
        <span className='font-bold h-10
         p-2 text-white text-xl'>FE-ASSIGNMENT</span>
        <button className='bg-blue-400 h-10
         p-2 rounded-sm'>star</button>
        <button className='bg-blue-400 h-10
         p-2 rounded-sm font-semibold text-white hover:brightness-110'>Workspace visible</button>
        <div className='space-x-1'>
            <button className='bg-white h-10
         p-2  rounded-sm font-semibold text-blue-900 hover:brightness-110'>Board</button>
            <button className='bg-blue-400 h-10
         p-2 hover:brightness-110'>dropdown</button>
        </div>
      </div>
      <div>
        <button className='bg-blue-400 h-10
         p-2 rounded-sm font-semibold text-white m-1 hover:brightness-110'>Power-Ups</button>
        <button className='bg-blue-400 h-10 rounded-sm font-semibold text-white mr-4 hover:brightness-110'>Automation</button>
        <button className='bg-blue-400 h-10 p-2 rounded-sm font-semibold text-white mr-6 hover:brightness-110'>Filter</button>
        <button className='m-2 h-10 p-2 rounded-full bg-blue-900'>AE</button>
        <button className='bg-white h-10
         p-2 rounded-sm font-semibold text-blue-900 mr-4 hover:brightness-110'>Share</button>
        <button className='bg-blue-400 h-10
         p-2 rounded-sm font-semibold text-white mr-2'>...</button>
      </div>
    </div>
  )
}
