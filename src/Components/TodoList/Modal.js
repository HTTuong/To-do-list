import React, { useState } from 'react';
import './TodoList.scss';

function Modal({ toggle, save }) {

    // State of text form
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');

    // State of select form
    const [status, setStatus] = useState('');

    const handleSaveTask = () => {
        const newTask = {
            taskName,
            description,
            deadline,
            status,
        }
        save(newTask);
    }

    return (
        <div className="modal-layout">
            <div className="modal-container">
                <div className="modal-header">
                    <span className="modal-header__title">Add </span>task
                </div>
                <div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="task-name" className="form-label">Task name</label>
                            <input id="task-name" className="form-control" type="text" value={taskName} placeholder="Enter task... " onChange={(e) => setTaskName(e.target.value)}></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description" className="form-label">Description</label>
                            <textarea id="description" className="form-control" type="text" rows="3" placeholder="Enter description... " value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="deadline" className="form-label">Deadline</label>
                            <input id="deadline" className="form-control" type="text" placeholder="Set deadline" value={deadline} onChange={(e) => setDeadline(e.target.value)}></input>
                        </div>
                        <div className="select-form">
                            <select className="select" onChange={(e) => setStatus(e.target.value)}>
                                <option>Select the status</option>
                                <option value="true">Done</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Not yet">Not yet</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div className="button-section">
                    <button className="btn btn-primary" onClick={(e) => handleSaveTask(e)}>Add</button>
                    <button className="btn btn-cancel" onClick={toggle}>Cancel</button>
                </div>

            </div>
        </div>
    )
}

export default Modal;
