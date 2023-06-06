import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
import "./sidebar.css";
import { Bookmark, Chat, Group, Help, PlayCircle, RssFeed, School, Work, Event } from "@mui/icons-material";

export default function Sidebar() {
    return (
        <>
            <div className="sidebar">
                <div className="sideBarWrapper">
                    <ul className="sideBarList">
                        <li className="sideBarListItem">
                            <RssFeed className="sideBarIcon" />
                            <span className="sideBarListItemText">Feed</span>
                        </li>
                        <li className="sideBarListItem">
                            <Chat className="sideBarIcon" />
                            <span className="sideBarListItemText">Chats</span>
                        </li>
                        <li className="sideBarListItem">
                            <PlayCircle className="sideBarIcon" />
                            <span className="sideBarListItemText">Videos</span>
                        </li>
                        <li className="sideBarListItem">
                            <Group className="sideBarIcon" />
                            <span className="sideBarListItemText">Groups</span>
                        </li>
                        <li className="sideBarListItem">
                            <Bookmark className="sideBarIcon" />
                            <span className="sideBarListItemText">Bookmarks</span>
                        </li>
                        <li className="sideBarListItem">
                            <Help className="sideBarIcon" />
                            <span className="sideBarListItemText">Questions</span>
                        </li>
                        <li className="sideBarListItem">
                            <Work className="sideBarIcon" />
                            <span className="sideBarListItemText">Jobs</span>
                        </li>
                        <li className="sideBarListItem">
                            <Event className="sideBarIcon" />
                            <span className="sideBarListItemText">Events</span>
                        </li>
                        <li className="sideBarListItem">
                            <School className="sideBarIcon" />
                            <span className="sideBarListItemText">Courses</span>
                        </li>
                    </ul>
                    <button className="sideBarButton">Show More</button>
                    <hr className="sideBarHr"/>
                    <ul className="sideBarFriendList">
                        {Users.map((u)=>
                        <CloseFriend key={u.id} user={u} />
                        )}
                    </ul>
                </div>
            </div>
        </>
    )
}
