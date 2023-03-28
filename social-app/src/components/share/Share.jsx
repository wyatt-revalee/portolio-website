import "./share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import RoomIcon from '@mui/icons-material/Room';

export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="/assets/people/me.jpg" alt="" className="shareProfileImg" />
                <input placeholder="What's on your mind?" className="shareInput" />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMediaIcon htmlColor="tomato" className="shareIcon"/>
                        <span className="ShareOptionText">Photo/Video</span>
                    </div>
                      <div className="shareOption">
                          <LabelIcon htmlColor="blue" className="shareIcon" />
                          <span className="ShareOptionText">Tag</span>
                      </div>
                      <div className="shareOption">
                          <RoomIcon htmlColor="green" className="shareIcon" />
                          <span className="ShareOptionText">Location</span>
                      </div>
                      <div className="shareOption">
                          <EmojiEmotionsIcon htmlColor="gold" className="shareIcon" />
                          <span className="ShareOptionText">Feelings</span>
                      </div>
                </div>
                <button className="shareButton">Share</button>
            </div>
        </div>
    </div>
  )
}
