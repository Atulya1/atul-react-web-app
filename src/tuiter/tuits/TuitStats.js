import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({tuits}) => {
    const liked = tuits.liked ? "red" : "";
    const dispatch = useDispatch();
    return (
        <div className="container">
        <div className="row">
            <div className="col-sm wd-icon-style">
                <i className="fa-regular fa-message wd-gray-handle"></i>
                <span className='ms-1 wd-gray-color'>{tuits.replies}</span>
            </div>
            <div className="col-sm wd-icon-style">
                <i className='fa fa-retweet wd-gray-color'></i>
                <span className='ms-1 wd-gray-color'>{tuits.retuits}</span>
            </div>
            <div className="col-sm wd-icon-style">
                <i className={tuits.liked ?`fa-solid fa-heart wd-red-like`:`fa-solid fa-heart wd-black-like`}
                   onClick={() => dispatch(updateTuitThunk({
                       ...tuits,
                       likes: tuits.likes + 1,
                       liked: true
                   }))
                   } style={{color: liked, "cursor": "pointer"}}></i>
                <span className='ms-1 wd-gray-color'>{tuits.likes}</span>
            </div>
            <div className="col-sm wd-icon-style">
                <i className='fa fa-thumbs-down wd-gray-color'
                   onClick={() => dispatch(updateTuitThunk({
                       ...tuits,
                       dislikes: tuits.dislikes + 1
                   }))
                   } style={{"cursor": "pointer"}}></i>
                <span className='ms-1 wd-gray-color'>{tuits.dislikes}</span>
            </div>
            <div className="col-sm wd-icon-style">
                <span><i className="fa-solid fa-cloud-arrow-up wd-gray-handle"></i></span>
            </div>
        </div>
        </div>
    );
}

export default TuitStats;