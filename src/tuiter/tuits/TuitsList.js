import React from "react";
import '../PostList/post-item.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import TuitStats from "./TuitStats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-home-reducer"
const TuitsList = (
    {
        tuit  = {
            "_id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "spacex.png",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-1">
                    <img className="rounded-circle" height={48} alt={"avatarIcon"} src={`./images/${tuit.image}`}/>
                </div>
                <div className="col-11">
                    <text className="m-lg-2 text-black fw-bold">{tuit.userName} </text> <i className="fas fa-check-circle fa-check-circle-override"/> <text className="text-secondary">{tuit.handle}</text><text className="text-secondary"> . {tuit.time}</text>
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(tuit._id)}></i>
                    <div className="image-body">
                        <div className=" m-lg-2 image-text">
                            <text className="">{tuit.tuit}</text>
                        </div>
                    </div>
                    <TuitStats
                        liked={tuit.liked}
                        replies={tuit.replies}
                        retuits={tuit.retuits}
                        likes={tuit.likes}
                        index={tuit._id}/>
                </div>

            </div>
        </li>
    );
};
export default TuitsList;