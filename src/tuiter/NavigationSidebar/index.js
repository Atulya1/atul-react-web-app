import React from "react";
import {useLocation} from "react-router";
import {Link} from "react-router-dom";
const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return(
        <div className="list-group">
            <a className="list-group-item " href="/#"><i className="fa-solid fa-plane"></i></a>
            <Link to="/tuiter/" className={`list-group-item ${active === 'home' || active === "" ?'active':''}`}>
                <i className="fas fa-home"></i> Home</Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}><i
                className="fa-solid fa-mountain-sun"></i> My Experiences</Link>
            <Link to="/tuiter/notifications" className={`list-group-item ${active === 'notifications'?'active':''}`}><i
                className="fa-solid fa-list"></i> Bucket List</Link>
            <Link to="/tuiter/messages" className={`list-group-item ${active === 'messages'?'active':''}`}><i className="fas fa-envelope"></i> Book a Trip</Link>
            <Link to="/tuiter/bookmarks" className={`list-group-item ${active === 'bookmarks'?'active':''}`}><i className="fas fa-bookmark"></i> Bookmarks</Link>
            <Link to="/tuiter/lists" className={`list-group-item ${active === 'lists'?'active':''}`}><i className="fas fa-list-ul"></i> Lists</Link>
            <Link to="/tuiter/profile" className={`list-group-item ${active === 'profile'?'active':''}`}><i className="fas fa-user"></i> Profile</Link>
            <Link to="/tuiter/more" className={`list-group-item ${active === 'more'?'active':''}`}><i
                className="fas fa-ellipsis-h"></i></Link>
        </div>
    );
};
export default NavigationSidebar;