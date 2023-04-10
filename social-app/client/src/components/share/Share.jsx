import "./share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import RoomIcon from '@mui/icons-material/Room';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function Share() {

    const {user} = useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const desc = useRef()
    const [file,setFile] = useState(null)

    const submitHandler = async (e) => {
        e.preventDefault()
        const newPost = {
            userId:user._id,
            desc: desc.current.value
        }

        if(file){
            const data = new FormData();
            const fileName = Date.now() + file.name
            data.append("name", fileName)
            data.append("file", file)
            newPost.img = fileName
            try{
                await axios.post("/upload", data)
            }catch(err){
                console.log("Error uploading")
            }
        }

        try{
           await axios.post("/posts",newPost)
            window.location.reload();
        }catch(err) {
            console.log("Error creating post")
        }
    }

  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img src={user.profilePicture ? PF+user.profilePicture : PF+"person/default.jpg"} alt="" className="shareProfileImg" />
                <input placeholder={"What's on your mind "+user.username + "?"} className="shareInput" ref={desc}/>
            </div>
            <hr className="shareHr" />
            {file && (
                <div className="shareImgContainer">
                    <img src={URL.createObjectURL(file)} alt="" className="shareImg" />
                    <DisabledByDefaultIcon className="shareCancelImg" onClick={()=>setFile(null)}/>
                </div>
            )}
            <form className="shareBottom" onSubmit={submitHandler}>
                <div className="shareOptions">
                    <label htmlFor="file" className="shareOption">
                        <PermMediaIcon htmlColor="tomato" className="shareIcon"/>
                        <span className="ShareOptionText">Photo/Video</span>
                        <input style={{display:"none"}} type="file" id="file" accept=".png, .jpeg, .jpg" onChange={(e)=>setFile(e.target.files[0])}/>
                      </label>
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
                <button className="shareButton" type="submit">Share</button>
              </form>
        </div>
    </div>
  )
}
