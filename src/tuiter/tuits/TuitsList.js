import React from "react";
import '../PostList/post-item.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import TuitStats from "./TuitStats";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";
const TuitsList = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
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
                    <TuitStats key={tuit._id} tuits={tuit}/>
                </div>

            </div>
        </li>
    );
};
export default TuitsList;