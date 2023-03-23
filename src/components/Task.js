import React from 'react';
import { TrashIcon } from '@heroicons/react/outline';
// import { useState } from 'react';

export default function Task({ id, title, description , onDelete, onEdit}) {

  // let startX = 0;
  // let startY = 0;

//   const handleDrag = (event) => {
//     const dx = event.clientX - startX;
//     const dy = event.clientY - startY;
//     event.currentTarget.style.transform = `translate(${dx}px, ${dy}px)`;
// };
  const handleDragStart = (event) => {
    event.dataTransfer.setData('text/plain', JSON.stringify({ id, title, description }));
};


const handleDragEnd = (event) => {
  event.currentTarget.style.transform = 'translate(0px, 0px)';
};

  // const handleDragOver = (event) => {
  //   var elem = document.getElementById("dragme");
  //   elem.style.transform = "rotate(0deg)";
  //   event.preventDefault();shadow-inner bg-white p-1 m-2
  // };

  return (
    <div>
      <div draggable={true}
        id={id}
        className="task bg-white m-2 shadow-lg"
        onDragStart={(e) => handleDragStart(e, { id, title, description })}
        onDragEnd={(e) => handleDragEnd(e)}>
      <h3>{title}</h3>
      <p>{description}</p>
      <TrashIcon className="h-5 w-5 relative left-60 bottom-7 hover:cursor-pointer text-gray-400" onClick={() => onDelete(id)} />
      {/* <button className='relative left-28 bottom-6' onClick={() => onEdit(id)}>
          <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
          </svg>
      </button> */}
    </div>
    </div>
  )
}



