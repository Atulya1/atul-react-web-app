import React, {useEffect} from "react";
import TuitsList from "./TuitsList";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk}
    from "../../services/tuits-thunks";


const TuitItem = () => {
    const {tuits, loading} = useSelector(
        state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])


    return(
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                tuits.map(tuit =>
                    <TuitsList
                        key={tuit._id}
                        tuit={tuit}/>
                )
            }
        </ul>
    )
}
export default TuitItem;