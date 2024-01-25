import React from 'react'
import "./addPost.css"
import WallpaperIcon from '@mui/icons-material/Wallpaper';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SellIcon from '@mui/icons-material/Sell';
import LiveTvIcon from '@mui/icons-material/LiveTv';


export default function AddPost() {
  return (
    <div className='addPost'>
       <div className="addPostContainer">
        <div className="addPostTop">
            <img src="/images/1.jpeg" alt="logo" className="addPostPic" />
            <input placeholder='What in your mind...?' type="text" className="addPostInput" />
        </div>

        <hr className='PostHr'/>
        <div className="addPostBottom">
            <div className="addPostOptions">
                <div className="addPostOption">
                <WallpaperIcon htmlColor='orange' className="addPhotos"/>
                <span className="addPostOptionText">Add Photo/Video</span>
                </div>

                <div className="addPostOption">
                <LocationOnIcon htmlColor='red' className="addPhotos"/>
                <span className="addPostOptionText">Add Location</span>
                </div>

                <div className="addPostOption">
                <SellIcon htmlColor='blue' className="addPhotos"/>
                <span className="addPostOptionText">Add Tag</span>
                </div>

                <div className="addPostOption">
                <LiveTvIcon htmlColor='tomato' className="addPhotos"/>
                <span className="addPostOptionText">Live</span>
                </div>
            </div>
            <button className="PostButton">Post</button>
        </div>
       </div>
    </div>
  )
}
