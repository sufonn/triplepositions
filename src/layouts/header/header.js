import Link from "next/link";
import React from "react";

const Header = () => {

    return (
    <React.Fragment>
        <header id="header" className="header">
            <div className="container-fluid">
                <div className="brand">triplepositions</div>
                <div className="contact-us"></div>
                <button className="nav-toggle-btn a-nav-toggle">
                    <span className="hamburger">
                        <span className="top-bun"></span>
                        <span className="meat"></span>
                        <span className="bottom-bun"></span>
                    </span>
                </button>
                <div className="hide-menu a-nav-toggle"></div>
                <div className="menu">
                    <div className="menu-main mt-100" id="accordition">
                        <ul id="mainMenu">
                            {/* <Link></Link> */}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    </React.Fragment>)
}

export default Header;