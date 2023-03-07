import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return(`
      <ul class="list-group">
        <li class="list-group-item list-group-item-action"><text class="fw-bold"> Who to follow </text></li>
         ${
        who.map(todo => {
            return(WhoToFollowListItem(todo));
        }).join('')
    }
      </ul>
   `);
}
export default WhoToFollowList;