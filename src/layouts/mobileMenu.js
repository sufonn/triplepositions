"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "public/images/logo/logo.svg";

const MobileMenu = () => {
    const [toggle, setToggle] = useState(false);
    
    return (
        <div className="mobile_menu">
            <div className="mobile_menu_inner">
                <div className="mobile_menu_main">
                    <div className="logo">
                        <Image 
                            src={logo}
                            alt="logo"
                        />
                    </div>
                    <div className="trigger">
                        <div
                            className={`hamburger hamburger--slider ${toggle ? "is-active" : ""}`}
                            onClick={() => setToggle(!toggle)}
                        >
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dropdown" style={{ display: toggle ? "block" : "none" }}>
                <div className="dropdown_inner">
                    <div className="anchor_nav">
                        <li className="current">
                            <Link href="#home"
                                onClick={() => setToggle(false)}
                            >
                                Home
                            </Link>
                        </li>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MobileMenu;