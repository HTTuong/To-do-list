import React, { useState } from 'react';
import './TodoList.scss';

function UpdateModal({ toggleUpdate, task, update, index }) {


    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');

    const handleUpdateTask = () => {
        let updatedTask = {
            taskName,
            description,
            deadline,
            completed: false
        }
        update(updatedTask, index)
    }

    return (
        <div className="modal-layout">
            <div className="modal-container">
                <div className="modal-header">
                    <span className="modal-header__title">Update </span>task
                </div>
                <div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="task-name" className="form-label">Task name</label>
                            <input id="task-name" className="form-control" type="text" value={taskName} placeholder={task.taskName} onChange={(e) => setTaskName(e.target.value)}></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description" className="form-label">Description</label>
                            <textarea id="description" className="form-control" type="text" rows="3" placeholder={task.description} value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="deadline" className="form-label">Deadline</label>
                            <input id="deadline" className="form-control" type="text" placeholder={task.deadline} value={deadline} onChange={(e) => setDeadline(e.target.value)}></input>
                        </div>
                    </form>
                </div>
                <div className="button-section">
                    <button className="btn btn-primary" onClick={handleUpdateTask}>Update</button>
                    <button className="btn btn-cancel" onClick={toggleUpdate}>Cancel</button>
                </div>

            </div>
        </div>
    )
}

export default UpdateModal;
