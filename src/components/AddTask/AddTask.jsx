import './addTask.css';
import { FaCheckSquare } from "react-icons/fa";


const AddTask = (props) => {

    

    return(<>
        
            <div className="row no-gutters task-detail">
                <div className="d-flex py-1 justify-content-between align-items-center">
                    <div className="w-75">
                        <input className="form-control form-control-sm" type="text" value="" placeholder="Nom de la tache"/>
                    </div>
                    <button type="button" className="btn btn-sm btn-outline-success d-flex">
                        <FaCheckSquare/>
                    </button>
                </div>
            </div>
        
    </>);

}

export default AddTask;