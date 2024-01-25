import React from 'react'
import "./post.css"

export default function Post() {
  return (
    <div className='post'>
      <div className="postCaption">
        <div className="postTop">
            <img src="/images/3.jpg" alt="logo" className="postImage" />
            <span className="postUserName">Ushan Mihiranga</span>
            <span className="postTime">5 mins ago</span>
        </div>

        <div className="postCenter">
            <div className="postCaption">
                Hellow I am Batman......!! Why So Serious.....!!
            </div>
            <img src="/images/3.jpg" alt="" className="postedImage" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img src="/images/4.jpg" alt="" className="reactionPic" />
                <img src="/images/5.png" alt="" className="reactionPic" />
                <img src="/images/6.jpg" alt="" className="reactionPic" />
                <span className="likeCount">Batman and 225 other</span>
            </div>
            <div className="postBottomRight">
                <span className="commentCount">15 comments</span>
            </div>
        </div>
      </div>
    </div>
  )
}
