
const NavigationSidebar = (active) => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="#">
       <i class="fab fa-twitter"></i></a>
       <a href="../HomeScreen/index.html" class="list-group-item ${active === 'home' ? 'active' : ''}">
                        <i class="fas fa-home"></i>
                        Home</a>
                    <a href="../ExploreScreen/index.html" class="list-group-item ${active === 'explore' ? 'active' : ''}">
                        <i class="fas fa-hashtag"></i>
                        Explore</a>
                    <a href="#" class="list-group-item ${active === 'notifications' ? 'active' : ''}">
                        <i class="fas fa-bell"></i>
                        Notifications</a>
                    <a href="#" class="list-group-item ${active === 'messages' ? 'active' : ''}">
                        <i class="fas fa-envelope"></i>
                        Messages</a>
                    <a href="#" class="list-group-item ${active === 'bookmarks' ? 'active' : ''}">
                        <i class="fas fa-bookmark"></i>
                        Bookmarks</a>
                    <a href="#" class="list-group-item ${active === 'lists' ? 'active' : ''}">
                        <i class="fas fa-list-ul"></i>
                        Lists</a>
                    <a href="#" class="list-group-item ${active === 'profile' ? 'active' : ''}">
                        <i class="fas fa-user"></i>
                        Profile</a>
                    <a href="#" class="list-group-item ${active === 'more' ? 'active' : ''}">
                        <i class="fas fa-ellipsis-h"></i>
                        &nbsp;More</a>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}

export default NavigationSidebar;