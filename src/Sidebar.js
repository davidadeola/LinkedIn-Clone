import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';

function Sidebar() {

    const recentItem = (topic) => (
      <div className="sidebar_recentItem">
        <span className="sidebar_hash">#</span>
        <p>{topic}</p>
      </div>
    )

    return (
      <div className="sidebar">
        <div className="sidebar_top">
          <img
            src="https://media.istockphoto.com/photos/
            blue-mesh-gradient-blurred-motion-abstract-background-picture-id1185747322?k=20&m=1185747322&s=612x612&w=0&h=Sy7s4nSTKEbDFY1HRAijhMJVRZd4_9rACOOjkkNa5bs="
            alt=""
          />
          <Avatar className="sidebar_avatar" />
          <h2>David Adeola</h2>
          <h4>Software Engineer</h4>
        </div>
        
        <div className="sidebar_stats">
          <div className="sidebar_stat">
            <p>Connections</p>
            <p className="sidebar_statNumber">2,543</p>
          </div>
          <div className="sidebar_stat">
            <p>Grow your network</p>
            <p className="sidebar_statNumber">543</p>
          </div>
        </div>

        <div className="sidebar_bottom">
          <p>Recents</p>
          {recentItem("reactjs")}
          {recentItem('programming')}
          {recentItem('softwareengineering')}
          {recentItem('designing')}
          {recentItem('developer')}
        </div>
      </div>
    );
}

export default Sidebar;
