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
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                tuits.slice(0).reverse().map(tuit =>
                    <TuitsList
                        key={tuit._id}
                        tuit={tuit}/>
                )
            }
        </ul>
    )
}
export default TuitItem;