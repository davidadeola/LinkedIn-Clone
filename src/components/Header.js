import React from 'react';
import './Header.css';

import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import CommentIcon from '@material-ui/icons/Comment';
import WorkIcon from '@material-ui/icons/Work';
import NotificationsIcon from '@material-ui/icons/Notifications';

import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
      <div className="header">
        <div className="header_left">
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt=""
          />

          <div className="header_search">
            <SearchIcon />
            <input type="text" />
          </div>
        </div>

        <div className="header_right">
          <HeaderOption Icon={HomeIcon} title="Home" />
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
          <HeaderOption Icon={WorkIcon} title="Jobs" />
          <HeaderOption Icon={CommentIcon} title="Messaging" />
          <HeaderOption Icon={NotificationsIcon} title="Notifications" />
          <HeaderOption
            avatar="https://shareicon.net/data/512x512/2016/09/01/822711_user_512x512.png"
            title='me'
          />
        </div>
      </div>
    );
}

export default Header;
