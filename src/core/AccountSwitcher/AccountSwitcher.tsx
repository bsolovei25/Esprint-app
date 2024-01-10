import React from 'react';
import '../../shared/styles/tailwind.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Default_pfp from "../../shared/assets/Default_pfp.png";
import {IUserData} from "../../shared/interfaces/IUserBox";
import FollowButton from "../../shared/components/FollowButton/FollowButton";

const AccountSwitcher : React.FC<{userInfo:IUserData, isUserLogInBox: boolean}> = ({ userInfo, isUserLogInBox}) => {
    const { logo, userId, userName, userTag } = userInfo;
    const borderRadius = isUserLogInBox ? 'rounded-3xl' : '';
    return(
            <div className={"flex items-center h-16 px-[16px] center hover:bg-twitter-shade " + borderRadius}>
                <div className="flex-none">
                    <img className=" h-auto w-[40px] h-[40px]"
                         src={ Default_pfp }
                         alt="default profile" />
                </div>
                <div className="flex-grow ml-3">
                    <div className="text-lg w-40 whitespace-nowrap font-medium text-trends-name overflow-hidden">{userName}</div>
                    <div className="text-sm text-trends-categories">{userTag}</div>
                </div>
                <div className="flex-none text-trends-name">
                {isUserLogInBox ? <MoreHorizIcon/> : <FollowButton/>}
                </div>
            </div>
    );
}

export default AccountSwitcher;