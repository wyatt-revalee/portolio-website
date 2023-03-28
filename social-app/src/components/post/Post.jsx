import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { Users } from "../../dummyData.js"
import { useState } from "react";

export default function Post({post}) {
  const [like, setLike] = useState(post.like)
  const [isLiked, setIsLiked] = useState(false)

  const likeHandler = ()=>{
    setLike(isLiked? like-1 : like+1)
    setIsLiked(!isLiked)
  }

  return (
    <div className="post">
        <div className="postWrapper">
              <div className="postTop">
                  <div className="postTopLeft">
            <img className="postProfileImg" src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="" />
                      <span className="postUsername">{Users.filter((u) => u.id === post.userId)[0].username}</span>
                      <span className="postDate">{post.date}</span>
                  </div>
                  <div className="postTopRight">
                    <MoreVertIcon/>
                  </div>
              </div>
              <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img src={post.photo} alt="" className="postImg" />
              </div>
              <div className="postBottom">
                  <div className="postBottomLeft">
                      <FavoriteIcon className="likeIcon" htmlColor="red" onClick={likeHandler} />
                      <ThumbUpAltIcon className="likeIcon" htmlColor="blue" onClick={likeHandler} />
                      <span className="postLikeCounter">{like} people liked this</span>
                  </div>
                  <div className="postBottomRight">
                    <snan className="postCommentText">{post.comment} comments</snan>
                  </div>
              </div>
        </div>
    </div>
  )
}
