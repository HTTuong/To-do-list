import React, { useState } from 'react';
import './Header.scss';


function Header() {
    return (
        <header>
            <div className="header">
                <h1 className="header__title">To to List</h1>
                <span className="header__greeting">Welcome to To do List Application !</span>
                <button className="header__add-btn"> Add task here !</button>
            </div>
        </header>
    )
}

export default Header