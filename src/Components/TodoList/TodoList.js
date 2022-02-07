import React, { useState } from "react";
import Modal from "./Modal";
import './TodoList.scss'

function TodoList() {
    const [openModal, setOpenModal] = useState(false);
    const [taskList, setTaskList] = useState([]);


    const toggle = () => {
        setOpenModal(!openModal);
    }

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

    return (
        <>
            <header>
                <div className="header">
                    <h1 className="header__title">To to List</h1>
                    <span className="header__greeting">Welcome to To do List Application !</span>
                    <button className="header__add-btn" onClick={() => setOpenModal(true)}> Add task here !</button>
                </div>
            </header>
            {openModal && <Modal toggle={toggle} save={saveTask} />}

        </>
    )
}

export default TodoList;