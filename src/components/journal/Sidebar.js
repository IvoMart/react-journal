import React from 'react';
import { JournalEntries } from './JournalEntries';

export const Sidebar = () => {
    return (
        <aside className='journal__sidebar'>
            <div className="journal__sidebar_navbar">
                <div className="journal__sidebar_usuario">
                    <span><i className="fas fa-user"></i></span>
                    <h3>Usuario</h3>
                </div>
                <button className="btn" >Logout</button>
            </div>

            <div className="journal__sidebar_new">
                <i className="fa fa-calendar-plus fa-3x" aria-hidden="true"></i>
                <p>New Entry</p>
            </div>

            <JournalEntries/>

        </aside>
    );
};
