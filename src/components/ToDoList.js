import React from 'react';
import { useState } from 'react';
import Task from './Task';

export default function ToDoList() {
    const [showInputField, setShowInputField] = useState(false);
    const [TaskText,setTaskText] = useState("");
    const [edit,editScreen] = useState(false);
    
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Task 1', description: 'Do something' },
        { id: 2, title: 'Task 2', description: 'Do something else' },
        { id: 3, title: 'Task 3', description: 'Do something more' }
      ]);
    
      // const addTask = () => {
      //   const newTask = {
      //     id: Math.floor(Math.random() * 1000),
      //     title: `Task ${tasks.length + 1}`,
      //     description: 'New task'
      //   };
      //   setTasks([...tasks, newTask]);
      // };

      const handleAddTaskClick = () => {
        setShowInputField(true);
      };
    
      // const handleTaskInputChange = (event) => {
      //   // Code to handle input field value change
      // };
    
      const handleTaskSubmit = (event) => {
        // event.preventDefault();
        // Code to add task to tasks array
        const newTask = {
            id: Math.floor(Math.random() * 1000),
            title: `Task ${tasks.length + 1}`,
            description: TaskText
          };
        setTasks([...tasks, newTask]);
        setTaskText("");
        setShowInputField(false);
      };

      const handleX = (event) => {
        // Code to handle input field value change
        setShowInputField(false);
      };
    
      const handleDrop = (event) => {
        event.preventDefault();
        const taskId = event.dataTransfer.getData('text/plain');
        const task = tasks.find((task) => task.id === parseInt(taskId));
        if (task) {
          const newTasks = tasks.filter((task) => task.id !== parseInt(taskId));
          setTasks(newTasks);
        }
      };
    
      const handleDragOver = (event) => {
        event.preventDefault();
      };

      const onDelete = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
      };

      const onEdit = (id) => {
        editScreen(true);
      };

  return (
    <div className="App self-start min-h-[100px]">
      <div className="todo-list bg-gray-200 shadow-2xl shadow-slate-700 rounded-sm w-72" onDrop={handleDrop} onDragOver={handleDragOver}>
      <h2 className='absolute m-2 text-blue-900 font-semibold'>To Do List</h2><br></br>
      {tasks.map((task) => (
        <Task key={task.id} {...task} onDelete={onDelete} onEdit={onEdit}/>
      ))}
      {showInputField && (
        <form className='h-36' onSubmit={handleTaskSubmit}>
            <input className='w-[96%] h-16 px-4 py-1 rounded-md m-2' type="text" value={TaskText}
            onChange={(e) => setTaskText(e.target.value)  }/>
            <br/>
            <div className='flex flex-row space-x-1 m-1 ml-2'>
                <button type='submit' className='bg-blue-500 rounded-sm p-1 hover:brightness-110'>Add Card </button>
                <button onClick={handleX}>X</button>
            </div>
            <br/>
        </form>
      )}
      {!showInputField && <button onClick={handleAddTaskClick} className='relative right-[5.5rem] m-2 mb-2 text-blue-900 font-semibold'>+ Add a Card</button>}
    </div>
    </div>
  );
};



