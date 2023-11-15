"use client"

import { Fragment, useEffect } from "react";

import Header from "./Header";
import { dataImage } from "@/utils";

const Layout = ({children}) => {
    useEffect(()=> {
        dataImage();
    }, [])

    return (
        <Fragment>
            <div className="wrapper">
                <Header />
                {children}
            </div>
        </Fragment>
    )
}

export default Layout;