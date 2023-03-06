import postsArray from "./posts.json";
import PostItem from "./post-item";
import React from "react";


const PostSummaryList = () => {
    return(
        <ul className="list-group">
    {
        postsArray.map(posts =>
            <PostItem
                key={posts._id}
                post={posts}/>
        )
    }
        </ul>
    )
}
export default PostSummaryList;