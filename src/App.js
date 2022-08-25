import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask/AddTask';
import Task from './components/Task/Task';

function App() {

  const task1 = {title:"une tache", completed:true};
  const task2 = {title:"une autre tache", completed:false};

  const [tasksList, setTasksList] = useState([task1, task2]);

  const tasksListElement = tasksList.map((task, i) => {
    return (<Task key={i} title={task.title} completed={task.completed} />);
  })

  return (
    <div className="App container">
        <AddTask />
        <hr/>
        <div className="tasks-container">
          {tasksListElement}
        </div>

    </div>
  );
}

export default App;
