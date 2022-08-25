import './addTask.css';
import { FaCheckSquare } from "react-icons/fa";
import { useState } from 'react';


const AddTask = ({addTaskToList}) => {

    const [taskValue, setTaskValue] = useState('');

    const onTaskValueChanged = (evt) => {
        evt.preventDefault();
        setTaskValue(evt.target.value);
        console.log(evt.target.value);
    }

    const handleClick = (evt) => {
        // evt.preventDefault();
        if(taskValue?.trim() === ''){
            return;
        }
        const task = {title:taskValue, completed:false}
        addTaskToList(task);
        setTaskValue('');
    }

    return(<>
        
            <div className="row no-gutters task-detail">
                <div className="d-flex py-1 justify-content-between align-items-center">
                    <div className="w-75">
                        <input className="form-control form-control-sm" type="text" value={taskValue} placeholder="Nom de la tache" onChange={onTaskValueChanged}/>
                    </div>
                    <button type="button" className="btn btn-sm btn-outline-success d-flex" onClick={handleClick}>
                        <FaCheckSquare/>
                    </button>
                </div>
            </div>
        
    </>);

}

export default AddTask;