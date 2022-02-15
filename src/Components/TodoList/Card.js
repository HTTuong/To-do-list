import React, { useState } from 'react';
import UpdateModal from './UpdateModal';

function Card({ index, taskObj, deleteTask, update }) {

    const [openUpdateModal, setOpenUpdateModal] = useState(false);

    // Toggle to turn on/off the update modal
    const toggleUpdate = () => {
        setOpenUpdateModal(!openUpdateModal);
    }

    const handleDeleteTask = (index) => {
        deleteTask(index);
    }

    // Set status color
    const statusColor = (taskStatus) => {
        switch (taskStatus) {
            case "true":
                return "#45B649";
            case "In Progress":
                return "#fbb40f";
            case "Not yet":
                return "#ff0000";
            default:
                break;
        }
    }

    const handleDoneTask = (index) => {
        const newTask = {
            ...taskObj,
            status: "true",
        }
        update(newTask, index);
    }

    // Display Edit color when Task is finished
    const hideFunction = (taskObj) => {
        if (taskObj.status === "true") {
            return 'none'
        } else {
            return 'block'
        }
    }

    return (
        <>
            <div className="card">
                <div className="card-status" style={{ backgroundColor: statusColor(taskObj.status) }}></div>
                <div className="card-content">
                    <div className="card-content__title">{taskObj.taskName} </div>
                    <div className="card-content__underline" style={{ backgroundColor: statusColor(taskObj.status) }}></div>
                    <ul>
                        <li className="card-content__description">{taskObj.description}</li>
                        <li className="card-content__deadline">
                            <span className="card-content__deadline-text">Deadline: </span>
                            {taskObj.deadline}
                        </li>
                    </ul>
                </div>
                <div className="card-function">
                    <div className="card-function__complete">
                        <input type="checkbox" className="card-function__complete-checkbox" onChange={() => handleDoneTask(index)} checked={taskObj.status === "true"}></input>
                        <span className="card-function__complete-title">Mark done</span>
                    </div>
                    <i className="card-function__edit far fa-edit" onClick={() => setOpenUpdateModal(true)} style={{ display: hideFunction(taskObj) }}></i>
                    <i className="card-function__delete fas fa-trash" onClick={() => handleDeleteTask(index)}></i>
                </div>
            </div>
            {openUpdateModal && <UpdateModal toggleUpdate={toggleUpdate} task={taskObj} update={update} index={index} />}
        </>
    )
}

export default Card