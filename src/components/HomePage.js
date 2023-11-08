"use client"

import parse from "html-react-parser";
import { useEffect, useState } from "react";
import { fetchData } from "@/utils";

const HomePage = () => {
    const [data, setData] = useState({});
    useEffect(() => {
        setData(fetchData("/static/info.json"));
    }, []);

    return (
        <div className="section" id="home">
            <div className="hero">
                <div 
                    className="backgroud"
                    data-img-url="images/backgroud/white.jpg"
                />
                <div className="container">
                    <div className="content">
                        <div className="details">
                            <div className="greeting">
                                <h3>rrrr</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomePage;