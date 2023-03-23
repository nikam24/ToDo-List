import React, { useState } from 'react';
import { TrashIcon } from '@heroicons/react/outline';

export default function DoneList({ tasks , setTasks}) {
  // const [draggingTask, setDraggingTask] = useState(null);
  const [taskList, setTasksList] = useState([]);
  const [showInputField, setShowInputField] = useState(false);
  const [TaskText,setTaskText] = useState("");

  const handleAddTaskClick = () => {
    setShowInputField(true);
  };

  const handleDragStart = (e, task) => {
    // setDraggingTask(task);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
};

const handleDrop = (event) => {
    event.preventDefault();
    const taskData = event.dataTransfer.getData('text/plain');
    const task = JSON.parse(taskData);
    setTasks((prevTasks) => {
        const newTasks = prevTasks.filter((t) => t.id !== task.id);
        return [...newTasks, { ...task }];
    });
};

const handleTaskSubmit = (event) => {
  // event.preventDefault();
  // Code to add task to tasks array
  const newTask = {
      id: Math.floor(Math.random() * 1000),
      title: `Task ${tasks.length + 1}`,
      description: TaskText
    };
  setTasksList([...taskList, newTask]);
  setTaskText("");
  setShowInputField(false);
};

const handleX = (event) => {
  // Code to handle input field value change
  setShowInputField(false);
};

const onDelete = (id) => {
  setTasks(tasks.filter(task => task.id !== id));
};

  return (
    <div
      className="done-container self-start min-h-[100px] relative bg-gray-100 shadow-2xl shadow-slate-700 rounded-sm w-72"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <h2 className='absolute m-2 text-blue-900 font-semibold'>Done</h2> <br/>
      {tasks.map((task) => (
        <div
          key={task.id}
          draggable
          onDragStart={(e) => handleDragStart(e, task)}
          className="task shadow-lg bg-white m-2"
        >
          {task.title}<br></br>
          {task.description}
          <TrashIcon className="h-5 w-5 relative left-60 bottom-7 hover:cursor-pointer text-gray-400" onClick={() => onDelete(task.id)} />
        </div>
      ))}

{showInputField && (
        <form className='h-36' onSubmit={handleTaskSubmit}>
            <input className='w-[96%] h-16 px-4 py-1 rounded-md m-2' type="text" value={TaskText}
            onChange={(e) => setTaskText(e.target.value)  }/>
            <br/>
            <div className=' flex flex-row space-x-1 m-1 ml-2'>
                <button type='submit' className='bg-blue-500 rounded-sm p-1 hover:brightness-110'>Add a Card </button>
                <button onClick={handleX}>X</button>
            </div>
            <br/>
        </form>
      )}
      {!showInputField && <button onClick={handleAddTaskClick} className=' text-blue-900 font-semibold relative m-2 right-20'>+ Add a Card</button>}
    </div>
  );
}
