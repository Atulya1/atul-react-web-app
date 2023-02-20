
const WhoToFollowListItem = (who) => {
return(`<li class="list-group-item list-group-item-action">
                            <div class="row">
                                <div class="col-2 icon">
                                <img src="${who.avatarIcon}" class="rounded-circle"  width="40" height="40">
                                </div>
                                <div class="col-6 info">
                                    <text class="text-white fw-bold">${who.userName} </text><i class="fas fa-check-circle fa-check-circle-override"></i>
                                    <br>
                                    <text class="text-secondary text-white">@${who.handle}</text>
                                </div>
                                <div class="col-4 button">
                                    <button type="button" class="btn btn-primary text-center btn-block rounded-pill mt-2 follow-btn-override">Follow</button>
                                </div>
                            </div>
                        </li>`)
}
export default WhoToFollowListItem;
