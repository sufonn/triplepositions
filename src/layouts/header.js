import Link from "next/link";
import Image from "next/image";

import { dm_sans } from "@/app/fonts";
import logo from "public/images/logo/logo.svg";

const Header = () => {

    return (
        <div className="header">
            <div className="container">
                <div className="inner">
                    <div className="logo">
                        <Link href="/">
                            <Image 
                                src={logo}
                                alt="logo"
                            />
                        </Link>
                    </div>
                    <div className={dm_sans.className + " menu"}>
                        <ul className="anchor_nav">
                            <li className="current">
                                <Link href="#home">Home</Link>
                            </li>
                            <li><Link href="#skills">Skills</Link></li>
                            <li><Link href="#experiences">Experinces</Link></li>
                            <li><Link href="#portfolio">Portfolio</Link></li>
                            <li><Link href="#contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className={dm_sans.className + " download"}>
                        <Link href="#"><span>Download</span></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;