"use client";

import { useEffect, useState } from "react";
import { fetchData } from "@/utils";
import { dm_serif_disp, source_code_pro } from "@/app/fonts";

const HomePage = () => {
    const [data, setData] = useState({});
    // useEffect(async () => {
    //     setData(await fetchData("statics/info.json"));
    // }, []);

    return (
        <div className="section" id="home">
            <div className="hero">
                <div
                    className="background"
                    data-img-url={"images/backgroud/white.jpg"}
                    style={{backgroundImage: "images/backgroud/white.jpg"}}
                >
                    <div className="container">
                        <div className="content">
                            <div className="details">
                                <div className="greeting">
                                    <h3 className={dm_serif_disp.className + " pinkText"}>{`Hello, I'm`}</h3>
                                </div>
                                <div className="name">
                                    <h3 className={source_code_pro.className + " darkPurpleText"}>{data && data.name ? data.name : "name"}</h3>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomePage;