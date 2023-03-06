import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './post-item.css'


const PostList = (
    {
        post  = {
            "_id": "899",
            "avatarIcon": "elon.jpg",
            "userName": "Elon Musk",
            "handle": "elonmusk",
            "time": "2h",
            "tweet": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "image": "cryptography.jpg",
            "title": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            "description": "In a new folder called HomeScreen, use the ExploreScreen implemented earlier as a guide to implement the home screen shown here on the right. The layout of the screen should be the same as shown. Use the same NavigationSideBar component used earlier on the left side just like in the ExploreScreen from earlier.",
            "messages": "4.2K",
            "retweets": "3.5K",
            "heart": "37.5K"
        }
    }
    ) => {
    return(
        <div className="wd-bookmark-content">
            <div className="wd-avatar-div">
                <img src={`./images/${post.avatarIcon}`} alt="Avatar" className="wd-avatar-img"/>
            </div>
            <div className="wd-main-body-text-div">
                <div className="wd-text-color wd-main-body-text">
                    <text className="text-black fw-bold">{post.userName} </text> <i className="fas fa-check-circle fa-check-circle-override"/> <text className="text-secondary">@{post.handle}</text><text className="text-secondary"> . {post.time}</text>
                        <text className="wd-text-color wd-font-size-15px">{post.tweet}</text>
                </div>
                <div className="wd-image-body">
                    <div>
                        <img  className="wd-lorem-img" src={`./images/${post.image}`}/>
                    </div>
                        <div className="wd-image-text">
                            <text className="wd-title">{post.title}</text>
                            <br/>
                            <text className="">{post.description}</text>
                        </div>
                </div>
                <div className="wd-icons" >
                    <div className="wd-icon-style" >
                        <a href="#"> <i className="fa-regular fa-message wd-gray-handle"></i></a>
                        <span className="wd-count wd-grey-icon"> {post.messages}</span>
                    </div>
                    <div className="wd-icon-style">
                        <a href="#"><i className="fas fa-retweet wd-gray-handle "></i></a>
                        <span className="wd-count wd-grey-icon"> {post.retweets}</span>
                    </div>
                    <div className="wd-icon-style">
                        <a href="#"><i className="fa-solid fa-heart wd-gray-handle"></i></a>
                        <span className="wd-grey-icon wd-count"> {post.heart}</span>
                    </div>
                    <div className="wd-icon-style">
                        <a href="#"><i className="fa-solid fa-cloud-arrow-up wd-gray-handle"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PostList;