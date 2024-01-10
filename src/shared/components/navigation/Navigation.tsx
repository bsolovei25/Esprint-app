import React from 'react';
import './Navigation.scss'
import esplit_logo from '../../assets/esplit.png'
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PostButton from '../post-button/PostButton';
import AccountSwitcher from "../../../core/AccountSwitcher/AccountSwitcher";
import {LoggedInUser} from "../../mocks/whoFollowMock";

const Navigation: React.FC = () => {
    return (
        <div className="left-sidebar mr-4">
            <div className="logo-area ml-[26px]">
                <img className="logo-area__icon rounded-full" src={esplit_logo} alt="esplit logo"/>
            </div>

            <div className="left-sidebar__icons-box">
                <div className="left-sidebar__icons-box__home">
                    <InputAdornment className = "left-sidebar__icons-box__home__icon" position="end">
                        <IconButton
                            aria-label="bell icon"
                            edge="end"
                        >
                            <HomeIcon />
                        </IconButton>
                    </InputAdornment>
                    <span className="left-sidebar__icons-box__home__caption">Home</span>
                </div>
                <div className="left-sidebar__icons-box__search">
                    <InputAdornment className = "left-sidebar__icons-box__search__icon" position="end">
                        <IconButton
                            aria-label="search icon"
                            edge="end"
                        >
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                    <span className="left-sidebar__icons-box__search__caption">Explore</span>
                </div>
                <div className="left-sidebar__icons-box__bell">
                    <InputAdornment className = "left-sidebar__icons-box__bell__icon" position="end">
                        <IconButton
                            aria-label="bell icon"
                            edge="end"
                        >
                            <NotificationsNoneOutlinedIcon />
                        </IconButton>
                    </InputAdornment>
                    <span className="left-sidebar__icons-box__bell__caption">Notifications</span>
                </div>
                <div className="left-sidebar__icons-box__envelope">
                    <InputAdornment className = "left-sidebar__icons-box__envelope__icon" position="end">
                        <IconButton
                            aria-label="bell icon"
                            edge="end"
                        >
                            <EmailOutlinedIcon />
                        </IconButton>
                    </InputAdornment>
                    <span className="left-sidebar__icons-box__envelope__caption">Messages</span>
                </div>
                <div className="left-sidebar__icons-box__list">
                    <InputAdornment className = "left-sidebar__icons-box__list__icon" position="end">
                        <IconButton
                            aria-label="bell icon"
                            edge="end"
                        >
                            <ListAltOutlinedIcon />
                        </IconButton>
                    </InputAdornment>
                    <span className="left-sidebar__icons-box__list__caption">Lists</span>
                </div>
                <div className="left-sidebar__icons-box__bookmark">
                    <InputAdornment className = "left-sidebar__icons-box__bookmark__icon" position="end">
                        <IconButton
                            aria-label="bell icon"
                            edge="end"
                        >
                            <BookOutlinedIcon />
                        </IconButton>
                    </InputAdornment>
                    <span className="left-sidebar__icons-box__bookmark__caption">Bookmarks</span>
                </div>
                <div className="left-sidebar__icons-box__communities">
                    <InputAdornment className = "left-sidebar__icons-box__communities__icon" position="end">
                        <IconButton
                            aria-label="bell icon"
                            edge="end"
                        >
                            <GroupsOutlinedIcon />
                        </IconButton>
                    </InputAdornment>
                    <span className="left-sidebar__icons-box__communities__caption">Communities</span>
                </div>
                <div className="left-sidebar__icons-box__user">
                    <InputAdornment className = "left-sidebar__icons-box__user__icon" position="end">
                        <IconButton
                            aria-label="bell icon"
                            edge="end"
                        >
                            <PersonOutlineOutlinedIcon />
                        </IconButton>
                    </InputAdornment>
                    <span className="left-sidebar__icons-box__user__caption">Profile</span>
                </div>
            </div>
          <div className="left-sidebar__post-button">
            <PostButton/>
          </div>
            <div className="absolute bottom-0 right-0 w-72 py-[12px] my-[16px] px-[8px]">
                <AccountSwitcher userInfo = {LoggedInUser} isUserLogInBox = {true}/>
            </div>
    </div>

    );
};

export default Navigation;