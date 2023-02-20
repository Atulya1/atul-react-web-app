
const PostSummaryItem = (post) => {
    return(`
                <li class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-9 pt-2 pt-override">
                        <text class="text-secondary">${post.topic}</text>
                        <br>
                        <text class="font-weight-bold text-white fw-bold">${post.userName}</text> <i class="fas fa-check-circle icon-override"></i>
                        <text class="text-secondary">${post.time}</text>
                        <br>
                        <text class="text-white fw-bold">${post.title}</text>
                        <br>
                        <text class="text-secondary">${post.tweets?post.tweets:''}</text>
                    </div>
                    <div class="col-3 wd-image">
                        <img class="img-fluid override-ig rounded" alt="Cinque Terre" src="${post.image}">
                    </div>
                </div>
                </li>
    `)
}
export default PostSummaryItem;

