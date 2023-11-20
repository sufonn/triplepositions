"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import parse from "html-react-parser";
import { fetchData } from "@/utils";

const HomePage = () => {
    const [data, setData] = useState({});
    useEffect(() => {
        const fetch = async () => {
            setData(await fetchData("statics/info.json"));
        }

        fetch().catch(console.error);
    }, []);

    return (
        <div className="section" id="home">
            <div className="hero">
                <div
                    className="background"
                    // data-img-url={"images/backgroud/white.jpg"}
                    // style={{backgroundImage: "images/backgroud/white.jpg"}}
                >
                    <div className="container">
                        <div className="content">
                            <div className="details">
                                <div className="greeting">
                                    <h3 className="purpleText">{`Hello, I'm`}</h3>
                                </div>
                                <div className="name">
                                    <h3 className="darkPurpleText">{data && data.name ? data.name : "name"}</h3>
                                </div>
                                <div className="job">
                                    <p>
                                        A <span className="orangeText"> {data && data.mainSkill} </span>
                                    </p>
                                </div>
                                <div className="text">
                                    <p>{data.bio}</p>
                                </div>
                                <div className="btn-group">
                                    <div className="button">
                                        <Link href="#about"><span>About me</span></Link>
                                    </div>
                                    <div className="social">
                                        <ul>
                                            {data &&
                                                data.social &&
                                                data.social.map((social, el) => {
                                                    <li key={el}>
                                                        <Link>
                                                            <i className={social.icon} />
                                                        </Link>
                                                    </li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="avatar">
                                <div>
                                    <Image 
                                        // src={}
                                        alt="avatar"
                                    />
                                </div>
                                {data &&
                                    data.skills &&
                                    data.skills.map((skill, el) =>
                                        skill.icon && (
                                            <span
                                                key={el}
                                                className={`skills ${skill.classname} anim_moveBottom`}
                                            >
                                            {/* {parse(skill.icon)} */}
                                            <Image 
                                                src={skill.icon}
                                                alt={skill.name}
                                                width={50}
                                                height={50}
                                            />
                                            </span>
                                        )
                                    )
                                }
                            </div>
                        </div>

                    </div>
                    <div className="down">
                        <Link href="#process">
                        <svg
                            width="26px"
                            height="100%"
                            viewBox="0 0 247 390"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            style={{
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeMiterlimit: "1.5",
                            }}
                            >
                            <path
                                id="wheel"
                                d="M123.359,79.775l0,72.843"
                                style={{
                                    fill: "none",
                                    stroke: "#000",
                                    strokeWidth: 20,
                                }}
                            />
                            <path
                                id="mouse"
                                d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                                style={{
                                    fill: "none",
                                    stroke: "#000",
                                    strokeWidth: 20,
                                }}
                            />
                            </svg>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomePage;