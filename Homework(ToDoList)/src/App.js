import './App.css';
import Intro from './components/intro';
import data from './data.json';
import List from './components/list';
import Form from './components/form';
import React, {useState} from 'react';
import Profile from './components/profile';

function App() {
    
  const [ toDoList, setToDoList ] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  const addTask = (userInput ) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }
  
  return (
    <div className="App">
        <Profile name="Hansel Faren" nim="2501990350"/>
        <Intro></Intro>
        <Form addTask={addTask}/>
        <List toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
    </div>
  );
}

export default App;