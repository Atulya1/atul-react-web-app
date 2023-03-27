import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {updateLikes}
    from "./tuits-home-reducer";

const TuitStats = (tuitStat) => {
    const dispatch = useDispatch();
    const [likes, setLikes] = useState({tuitId: tuitStat.index, tuitLikes: tuitStat.likes, tuitLiked: tuitStat.liked})

    const updateTuitLikes = (id) => {

        if(likes.tuitLiked) {
            setLikes({...likes, tuitLikes: likes.tuitLikes - 1, tuitLiked: false});
        } else {
            setLikes({...likes, tuitLikes: likes.tuitLikes + 1, tuitLiked: true});
        }
        dispatch(()=>updateLikes(likes));
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm wd-icon-style" >
                    <span><i className="fa-regular fa-message wd-gray-handle"></i></span>
                    <span style={{ fontSize: "15px", paddingRight: "12px"}}>&nbsp; {tuitStat.replies}</span>
                </div>
                <div className="col-sm wd-icon-style">
                    <span><i className="fas fa-retweet wd-gray-handle"></i></span>
                    <span style={{ fontSize: "15px", paddingRight: "12px"}}>&nbsp; {tuitStat.retuits}</span>
                </div>
                <div className="col-sm wd-icon-style">
                    <span style={{"cursor": "pointer"}} onClick={() => updateTuitLikes(tuitStat.index)}><i className={likes.tuitLiked ?`fa-solid fa-heart wd-red-like`:`fa-solid fa-heart wd-black-like`}></i></span>
                    <span style={{ fontSize: "15px", paddingRight: "12px"}}>&nbsp; {likes.tuitLikes}</span>
                </div>
                <div className="col-sm wd-icon-style">
                    <span><i className="fa-solid fa-cloud-arrow-up wd-gray-handle"></i></span>
                </div>
            </div>
        </div>
    )
}

export default TuitStats;