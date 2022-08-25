import './task.css';
import { FaTrashAlt } from "react-icons/fa";


const Task = ({title, completed}) => {

    //créer un state pour le completed
    //ajouter l'evt onChange sur l'input check

    return(<>
        
            <div className="row no-gutters task-detail">
                <div className="d-flex py-1 justify-content-between align-items-center">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" checked={completed}/>
                        <label className="form-check-label">
                            {title}
                        </label>
                    </div>
                    <button type="button" className="btn btn-sm btn-outline-danger d-flex">
                        <FaTrashAlt/>
                    </button>
                </div>
            </div>
        
    </>);

}

export default Task;