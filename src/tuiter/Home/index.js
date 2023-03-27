import React from "react";
import './index.css'
import TuitItem from "../tuits/TuitItem";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return (

            <>
                <h4>Home</h4>
                <WhatsHappening/>
                <TuitItem/>
            </>
    );
}

export default HomeComponent;