import React from "react";
import TuitsList from "./TuitsList";
import {useSelector} from "react-redux";


const TuitItem = () => {
    const tuitsa = useSelector(
        (state) => state.tuitsHome);

    return(
        <ul className="list-group">
            {
                tuitsa.map(tuit =>
                    <TuitsList
                        key={tuit._id}
                        tuit={tuit}/>
                )
            }
        </ul>
    )
}
export default TuitItem;