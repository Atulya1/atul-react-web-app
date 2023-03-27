import React from "react";
import {useSelector} from "react-redux";

const ExampleReduxExampleComponent = () => {
    const message = useSelector((state) => state.example.example);
    return(
        <h1>{message}</h1>
    );
};

export default ExampleReduxExampleComponent;