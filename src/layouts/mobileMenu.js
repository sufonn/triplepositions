import { useState } from "react";
import Link from "next/link";

const MobileMenu = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className="mobile-menu">
            <div className="mobile-menu-inner">
                <div className="menu-container">
                    <div className="logo">
                        <Link href="/">
                            <img />
                        </Link>
                    </div>
                    <div className="trigger">
                        <div className={`hamburger hamburger--slider ${toggle ? "is-active" : ""}`}
                            onClick={() => setToggle(!toggle)}>
                            <div className="hamburger-box">
                                <div className="hamburger-inner" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileMenu;