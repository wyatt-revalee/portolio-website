import "./leftbar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ChatIcon from '@mui/icons-material/Chat';
import EventNoteIcon from '@mui/icons-material/EventNote';
import { Users } from "../../dummyData.js"
import CloseFriend from "../closeFriend/CloseFriend";

export default function Leftbar() {
    return (
        <div className="leftbar">
            <div className="leftbarWrapper">
                <ul className="leftbarList">
                    <li className="leftbarListItem">
                        <RssFeedIcon className="leftbarIcon"/>
                        <span className="leftbarListItemText">Feed</span>
                    </li>
                    <li className="leftbarListItem">
                        <AccountCircleIcon className="leftbarIcon" />
                        <span className="leftbarListItemText">Profile</span>
                    </li>
                    <li className="leftbarListItem">
                        <BookmarkIcon className="leftbarIcon" />
                        <span className="leftbarListItemText">Bookmarks</span>
                    </li>
                    <li className="leftbarListItem">
                        <ChatIcon className="leftbarIcon" />
                        <span className="leftbarListItemText">Chats</span>
                    </li>
                    <li className="leftbarListItem">
                        <EventNoteIcon className="leftbarIcon" />
                        <span className="leftbarListItemText">Events</span>
                    </li>
                </ul>
                <button className="leftbarButton">Show More</button>
                <hr className="leftbarHr"/>
                <ul className="leftbarFriendList">
                    {Users.map(u=>(
                        <CloseFriend key={u.id} user={u} />
                    ))}
                </ul>
            </div>
        </div>
    )
}