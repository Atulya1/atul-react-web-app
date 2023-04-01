import ExploreComponent from "./Explore";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowList from "./WhoToFollowList";
import {Routes, Route} from "react-router";
import HomeComponent from "./Home";
import React from "react";
import whoReducer from "./reducers/who-reducer";
import experienceReducer from "./Experiences/experience-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import tuitsHomeReducer from "./tuits/tuits-home-reducer"
import { configureStore }
    from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import ProfileComponent from "./Profile";
import profileReducer from "./Profile/profile-reducer";
import EditProfileComponent from "./EditProfile";
import HomeExp from "./Experiences/index";
import HomeComponentProject from "./Home-Project/HomeComponentProject";

const store = configureStore({
    reducer: {who: whoReducer, tuits: tuitsReducer, tuitsHome: tuitsHomeReducer, profile: profileReducer, experience: experienceReducer}
});

function Tuiter() {
    return (
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-2">
                    <NavigationSidebar active="explore"/>
                </div>
                <div className="col-7"
                     style={{"position": "relative"}}>
                    <Routes>
                        <Route path="/" element={<HomeComponent/>}/>
                        {/*<Route path="home" element={<HomeComponent/>}/>*/}
                        <Route path="explore" element={<HomeComponentProject/>}/>
                        <Route path="profile" element={<ProfileComponent/>}/>
                        <Route path="edit-profile" element={<EditProfileComponent/>}/>
                    </Routes>
                </div>
                <div className="col-3">
                    <HomeExp/>
                </div>
            </div>
        </Provider>
    )
}
export default Tuiter;