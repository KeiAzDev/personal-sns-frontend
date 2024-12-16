import React from 'react'
import "./Rightbar.css";

export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="eventContainer">
          <img src="assets/star.png" alt="" className="starImg" />
          <span className="evnetText">
            <b>フォロワー限定</b>イベント開催中
          </span>
        </div>
        <img src="assets/ad.jpeg" alt="" />
        <h4 className="rightbarTitle">オンラインの友達</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightProfileImgContainer">
              <img src="assets/person/1.jpeg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Shin Code</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
