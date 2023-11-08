import { Fragment } from "react";

import Header from "./header";
import Footer from "./footer";

const Layout = ({children}) => {

    return (
        <Fragment>
            <div className="wraper">
                <Header />
                {children}
                <Footer />
            </div>
        </Fragment>
    )
}

export default Layout;