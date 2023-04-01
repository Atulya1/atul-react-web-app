import React from "react";
import "./index.css";
const HomeComponentProject = () => {
    return(
        <>
            <div className="row">
                <div className="col-12 position-relative mb-1">
                    <input placeholder="Search City"
                           className="form-control rounded-pill ps-5"/>
                    <i className="bi bi-search position-absolute
                       wd-nudge-up"></i>
                </div>
            </div>

            <div className="position-relative mb-2">
                {/*<img src="./images/cryptography.jpg" className="w-100" alt="StarShip"/>*/}
                {/*<h1 className="position-absolute wd-nudge-up text-white">*/}
                {/*    SpaceX Starship</h1>*/}
                <div id="demo" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="./images/Boston1.webp" alt="boston1" className="w-100"/>
                        </div>
                        <div className="carousel-item">
                            <img src="./images/Boston2.jpeg" alt="boston2" className="d-block w-100"/>
                        </div>
                        <div className="carousel-item">
                            <img src="./images/Boston3.jpg" alt="boston3" className="d-block w-100"/>
                        </div>
                        <h1 className="position-absolute wd-nudge-up text-white">
                            Boston</h1>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </button>
                </div>

            </div>
            {/*<PostSummaryList/>*/}
        </>
    );
};
export default HomeComponentProject;