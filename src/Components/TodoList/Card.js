import React, { useState } from 'react';
import UpdateModal from './UpdateModal';

function Card({ index, taskObj, deleteTask, taskList, update }) {

    const [openUpdateModal, setOpenUpdateModal] = useState(false);

    const toggleUpdate = () => {
        setOpenUpdateModal(!openUpdateModal);
    }

    const handleDeleteTask = (index) => {
        deleteTask(index);
    }

    return (
        <>
            <div className="card" key={index}>
                <div className="card-status"></div>
                <div className="card-content">
                    <div className="card-content__title">{taskObj.taskName}</div>
                    <div className="card-content__underline"></div>
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
                        <input type="checkbox" className="card-function__complete-checkbox"></input>
                        <span className="card-function__complete-title">Mark done</span>
                    </div>
                    <i className="card-function__edit far fa-edit" onClick={() => setOpenUpdateModal(true)}></i>
                    <i className="card-function__delete fas fa-trash" onClick={handleDeleteTask}></i>
                </div>
            </div>
            {openUpdateModal && <UpdateModal toggleUpdate={toggleUpdate} task={taskObj} update={update} index={index} />}
        </>

    )
}

export default Card