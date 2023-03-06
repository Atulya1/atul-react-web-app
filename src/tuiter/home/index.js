import React from "react";
import './index.css'
import PostSummaryList from "../post-list";

const HomeComponent = () => {
    return (
        <>

            <div className="col-10 col-lg-7 col-xl-6">
                {
                    <PostSummaryList />
                }
            </div>
        </>
    );
}

export default HomeComponent;