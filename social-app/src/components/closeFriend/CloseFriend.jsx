import "./closefriend.css"

export default function CloseFriend({user}) {
  return (
      <li className="leftbarFriend">
          <img src={user.profilePicture} alt="" className="leftbarFriendImg" />
          <span className="leftbarFriendName">{user.username}</span>
      </li>
  )
}
