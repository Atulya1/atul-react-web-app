import PostSummaryList from "../PostSummaryList/main.js";
const ExploreComponent = () => {
    return(`
            <div class="row">
                <div class="col-11">
                    <div class="form-group has-search">
                        <span class="fa fa-search form-control-feedback"></span>
                        <input type="text" class="form-control border-end-0 rounded-pill bg-white wd-search-bar-override" placeholder="Search Twitter">
                    </div>
                </div>
                <div class="col-1">
                    <a href="../exploreGraduate/explore-settings.html"><i class="fas fa-cog wd-settings fa-2x override-bs mt-1"></i></a>
                </div>
            </div>
            <ul class="nav mb-2 nav-tabs mt-2">
                <li class="nav-item"><a class="nav-link active nla-override" href="#">For You</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Trending</a></li>
                <li class="nav-item"><a class="nav-link" href="#">News</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Sports</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Entertainment</a></li>
           </ul>
           <div class="card mt-2 mb-2">
                <img src="../images/cryptography.jpg"
                     class="card-img-top" alt="...">
                <div class="card-img-overlay d-flex align-items-end">
                    <h4 class="wd-card-img-text">Cryptography</h4>
                </div>
            </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
