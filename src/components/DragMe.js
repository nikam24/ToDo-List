import React from 'react';
import { useState } from 'react';

export default function DragMe() {

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleDrag = (event) => {
    var elem = document.getElementById("dragme");
    elem.style.transform = "rotate(5deg)";
    event.currentTarget.style.cursor = 'grabbing';
    console.log("Dragging");
  };
  
  const handleDragStart = (event) => {
    // Set the cursor style while dragging
    // Add data to the drag event
    var elem = document.getElementById("dragme");
    event.dataTransfer.setData('text/plain', 'Drag me!');
    console.log("Started Dragging");
  };

  const handleDragEnd = (event) => {
    setX(event.clientX);
    setY(event.clientY);
    var elem = document.getElementById("dragme");
    elem.style.transform = "rotate(0deg)";
    console.log("Ended Dragging");
  };

  const handleDragOver = (event) => {
    var elem = document.getElementById("dragme");
    elem.style.transform = "rotate(0deg)";
    event.preventDefault();
  };

  return (
    <div id='dragme' draggable onDragOver={handleDragOver} onDragStart={handleDragStart} onDrag={handleDrag} onDragEnd={handleDragEnd} className='bg-white text-black shadow-sm p-2' style={{
              position: "absolute",
              left: x,
              top: y
            }}>
      Drag me!
    </div>
  )
}
