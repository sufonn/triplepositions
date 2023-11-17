"use client";

import { useEffect, useState } from "react";
import { fetchData } from "@/utils";

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
                                    <h3 className="pinkText">{`Hello, I'm`}</h3>
                                </div>
                                <div className="name">
                                    <h3 className="darkPurpleText">{data && data.name ? data.name : "name"}</h3>
                                </div>
                                <div className="job">
                                    <p></p>
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