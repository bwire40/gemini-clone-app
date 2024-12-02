import React from "react";
import "./sidebar.css";
import { assets } from "../../assets/assets.js";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <img src={assets.menu_icon} alt="menu" className="menu" />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="plus_icon" />
          <p>New Chat</p>
        </div>

        <div className="recent">
          <p className="recent-title">Recent</p>

          <div className="recent-entry">
            <img src={assets.message_icon} alt="messaage" />
            <p>What is React ...</p>
          </div>
        </div>
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default Sidebar;
