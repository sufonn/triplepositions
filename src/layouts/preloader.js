import { useEffect } from "react";
import { preloader } from "../utils";

const Preloader = () => {
    useEffect(() => {
        preloader();
    }, []);

    return (
        <div id="preloader">
            <div className="loader"></div>
        </div>
    );
};

export default Preloader;