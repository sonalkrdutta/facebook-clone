import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import FlagOutlinedIcon from '@material-ui/icons/FlagOutlined';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img 
                src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png"
                alt=""
                />
                <div className="header__input">
                <SearchIcon/>
                <input type="text"/>
                </div>
            </div>
            <div className="header__center">
                <div className="header__option">
                    <HomeOutlinedIcon fontSize="large"/>
                    </div>
                    <div className="header__option">
                    <FlagOutlinedIcon fontSize="large"/>
                    </div>
                    <div className="header__option">
                    <SubscriptionsOutlinedIcon
                    fontSize="large"/>
                    </div>
                    <div className="header__option">
                    <StorefrontOutlinedIcon fontSize="large"/>
                    </div>
                    <div className="header__option">
                    <SupervisedUserCircleOutlinedIcon fontSize="large"/>
                </div>
            </div>

            <div className="header__right">
                <div className="header__info">
                    <Avatar/>
                    <h4>Sonal Scottzz Dutta</h4>
                </div>
                <IconButton>
                    <AddIcon/>
                </IconButton>
                <IconButton>
                    <ForumIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>
            </div>
        </div>
    )
}

export default Header
