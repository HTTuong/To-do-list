import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import Card from "./Card";
import './TodoList.scss'

function TodoList() {
    const [openModal, setOpenModal] = useState(false);
    const [taskList, setTaskList] = useState([]);


    // Get the data from local storage
    useEffect(() => {
        let list = localStorage.getItem('tasklist');
        if (list) {
            const taskObjList = JSON.parse(list);
            setTaskList(taskObjList);
        }
    }, [])

    // Toggle to turn on/off the modal
    const toggle = () => {
        setOpenModal(!openModal);
    }



    // Save a new task to local storage
    const saveTask = (newTask) => {
        setTaskList(prev => {
            // Update task list
            const newTaskList = [...prev, newTask];

            // Save to local storage
            const jsonTaskList = JSON.stringify(newTaskList);
            localStorage.setItem('tasklist', jsonTaskList);

            return newTaskList;
        })
        setOpenModal(false);
    }

    // Update a existing task in local storage
    const updateTask = (updatedTask, index) => {
        taskList.splice(index, 1, updatedTask);
        localStorage.setItem('tasklist', JSON.stringify(taskList));
        setTaskList(taskList);
        window.location.reload();
    }

    // Delete a task in local storage
    const deleteTask = (index) => {
        taskList.splice(index, 1);
        localStorage.setItem('tasklist', JSON.stringify(taskList));
        setTaskList(taskList);
        window.location.reload();
    }


    return (
        <>
            <header>
                <div className="header">
                    <h1 className="header__title">To to List</h1>
                    <span className="header__greeting">Welcome to To do List Application !</span>
                    <button className="header__add-btn" onClick={() => setOpenModal(true)}> Add task here !</button>
                </div>
            </header>
            <div>
                <div className="task-container">
                    {taskList.map((task, index) => <div className="card-wrap" key={index}><Card taskObj={task} index={index} deleteTask={deleteTask} update={updateTask} />  </div>)}
                </div>
            </div>
            {openModal && <Modal toggle={toggle} save={saveTask} />}

        </>
    )
}

export default TodoList;