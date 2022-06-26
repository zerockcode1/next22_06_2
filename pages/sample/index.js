import React from 'react';
import Script from 'next/script'
import LeftMenu from "../../components/leftmenu";
import Nav from "../../components/nav";

const Index = () => {
    return (
<>
    <div className="d-flex" id="wrapper">
        <LeftMenu></LeftMenu>
        <div id="page-content-wrapper">
            <Nav></Nav>
            <div className="container-fluid">
                <h1 className="mt-4">Simple Sidebar</h1>
                <p>The starting state of the menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will change.</p>
                <p>
                    Make sure to keep all page content within the
                    <code>#page-content-wrapper</code>
                    . The top navbar is optional, and just for demonstration. Just create an element with the
                    <code>#sidebarToggle</code>
                    ID which will toggle the menu when clicked.
                </p>
            </div>
        </div>
    </div>
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>
    <Script src="static/js/scripts.js"></Script>

</>

    );
};

export default Index;