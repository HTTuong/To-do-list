import React, { useState } from 'react';
import './TodoList.scss';

function Modal({ toggle, save }) {


    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');

    const handleSaveTask = () => {
        const newTask = {
            taskName,
            description,
            deadline,
            completed: false
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
