import React from 'react';
import LeftMenu from "../leftmenu";
import Nav from "../nav";
import Script from "next/script";

const Layout1 = ({children}) => {
    return (
        <>
            <div className="d-flex" id="wrapper">
                <LeftMenu></LeftMenu>
                <div id="page-content-wrapper">
                    <Nav></Nav>
                    <div className="container-fluid">
                        {children}
                    </div>
                </div>
            </div>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>
            <Script src="/static/js/scripts.js"></Script>

        </>
    );
};

export default Layout1;