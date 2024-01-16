import React from "react";
import { useParams } from 'react-router-dom';
import backArrow from "../../shared/assets/svg/backArrow.svg";
import '../../shared/styles/tailwind.css';
import Default_pfp from "../../shared/assets/Default_pfp.png";
import ProfileDescription from "./UserProfileDescription/ProfileDescription";
import HeadersBuilder from "../HeadersBuilder/HeadersBuilder";
import {profileTimelineHeaders} from "../../shared/constants/Headers";

const UserProfile = () => {
    const { userReference } = useParams();
    return(
        <div className="flex flex-col bg-profile-header border-[1px]">
            <div className= "flex flex-row bg-profile-header h-[53px] border-x border-b-[1px]">
                <div className="flex flex-row items-center">
                    <div className="flex items-center h-[36px] w-[36px] ml-4">
                        <img src={backArrow} alt="emoji svg" className="h-[20px] w-[20px]"/>
                    </div>
                    <div className="flex flex-col ml-5 ">
                        <span className="text-xl font-bold">UserName</span>
                        <span className="text-trends-categories text-sm">0<span className="ml-1">posts</span></span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="bg-profile-default-bg w-full h-[200px]">
                    {/*TODO later add banner*/}
                </div>
                <div className="flex flex-row place-content-between relative h-24">
                    <div className="h-16 relative bottom-[70px] left-5">
                        <div
                            className="absolute bg-default-white z-50 top-[70.25px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-38 h-38 rounded-full">
                        </div>
                        <img className="h-auto w-36 h-36 z-50 relative"
                             src={ Default_pfp }
                             alt="default profile" />
                    </div>
                    <div className= "bg-white border-[1px] h-9 mr-6 mt-4 px-4 cursor-pointer border-profile-default-bg font-semibold hover:bg-header-hover size-4 rounded-full flex items-center">
                        Edit Profile
                    </div>
                </div>
                <ProfileDescription/>
            </div>
            <HeadersBuilder headersArray={profileTimelineHeaders} isTimelineSettingsAllowed={false} aria-label='Profile timelines'/>
            {/*<h1>User Profile: {userReference}</h1>*/}
        {/*    TODO use userReference later for user profile screen*/}
        </div>
    );

}

export default UserProfile;