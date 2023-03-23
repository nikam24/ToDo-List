// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import DragMe from './components/DragMe';
// import NoDrag from './components/NoDrag';
import TodoList from './components/ToDoList';
import DoingList from './components/DoingList';
import DoneList from './components/DoneList';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
  ]);

  return (
    <div className="App h-screen bg-blue-500">
      <Navbar />
      {/* <DragMe/>
      <NoDrag/> */}
      <div className='flex flex-row items-stretch  space-x-4 m-2 '>
        <TodoList />
        <DoingList tasks={tasks} setTasks={setTasks}/>
        <DoneList tasks={tasks} setTasks={setTasks}/>
      </div>
    </div>
  );
}

export default App;
