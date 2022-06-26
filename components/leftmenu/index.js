import React from 'react';

const LeftMenu = () => {
    return (
        <div className="border-end bg-white" id="sidebar-wrapper">
            <div className="sidebar-heading border-bottom bg-light">Start Bootstrap</div>
            <div className="list-group list-group-flush">
                <a className="list-group-item list-group-item-action list-group-item-light p-3" href="components/leftmenu/index#!">Dashboard</a>
                <a className="list-group-item list-group-item-action list-group-item-light p-3" href="components/leftmenu/index#!">Shortcuts</a>
                <a className="list-group-item list-group-item-action list-group-item-light p-3" href="components/leftmenu/index#!">Overview</a>
                <a className="list-group-item list-group-item-action list-group-item-light p-3" href="components/leftmenu/index#!">Events</a>
                <a className="list-group-item list-group-item-action list-group-item-light p-3" href="components/leftmenu/index#!">Profile</a>
                <a className="list-group-item list-group-item-action list-group-item-light p-3" href="components/leftmenu/index#!">Status</a>
            </div>
        </div>
    );
};

export default LeftMenu;