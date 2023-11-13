import { Fragment } from "react";

import Header from "./header";
import MobileMenu from "./mobileMenu";
import Footer from "./footer";

const Layout = ({children}) => {

    return (
        <Fragment>
            <div className="wraper">
                <MobileMenu />
                <Header />
                {children}
                <Footer />
            </div>
        </Fragment>
    )
}

export default Layout;