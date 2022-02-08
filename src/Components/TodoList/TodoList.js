import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import Card from "./Card";
import './TodoList.scss'

function TodoList() {
    const [openModal, setOpenModal] = useState(false);
    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        let list = localStorage.getItem('tasklist');
        if (list) {
            const taskObjList = JSON.parse(list);
            setTaskList(taskObjList);
        }
    }, [])

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

    const updateTask = (updatedTask, index) => {
        taskList.splice(index, 1, updatedTask);
        localStorage.setItem('tasklist', JSON.stringify(taskList));
        setTaskList(taskList);
        window.location.reload();
    }

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
                    {taskList.map((task, index) => <Card taskObj={task} index={index} deleteTask={deleteTask} taskList={taskList} update={updateTask} />)}
                </div>
            </div>
            {openModal && <Modal toggle={toggle} save={saveTask} />}

        </>
    )
}

export default TodoList;