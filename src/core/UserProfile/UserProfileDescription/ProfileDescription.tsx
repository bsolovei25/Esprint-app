import React from 'react';
import '../../../shared/styles/tailwind.css';
import locationPin from "../../../shared/assets/svg/location-pin.svg";
import profileLink from "../../../shared/assets/svg/profile-link.svg";
import calendar from "../../../shared/assets/svg/calendar.svg";

const ProfileDescription= () => {
    return(
        <div className="flex flex-col w-full pl-6 leading-5 mb-5">
            <div className="mb-[16px] mt-[4px]">
                <div className="font-bold text-xl text-trends-name">
                    User NickName
                </div>
                <div className="text-trends-categories size-3 text-trends-name">
                    @UserTag
                </div>
            </div>
            <div className="text-trends-name text-pretty mb-[12px]">
                hello I am the user and this is my profile description - I like posting my little stupid memes on this stupid little platform
            </div>
            <div className="flex flex-row items-center mb-2">
                        <span className="flex items-center justify-center">
                            <img src={locationPin} alt="location pin" className="h-[20px] w-[20px] text-description-info"/>
                            <span className="text-description-info text-base font-normal ml-1">location place</span>
                            <img src={profileLink} alt="profile link" className="h-[20px] w-[20px] text-description-info ml-3"/>
                            <span className="text-description-info text-base font-normal ml-1">profile link</span>
                            <img src={calendar} alt="calendar" className="h-[20px] w-[20px] text-description-info ml-3"/>
                            <span className="text-description-info text-base font-normal ml-1">Joined November 2021</span>
                        </span>
            </div>
            <div className='mb-2'>
                        <span className='hover:border-b-[1px] border-trends-name cursor-pointer'>
                            <span className='font-bold'>396</span>
                            <span className='text-trends-categories text-base ml-1'>Following</span>
                        </span>
                <span className='ml-2 hover:border-b-[1px] border-trends-name cursor-pointer'>
                            <span className='font-bold'>1,027</span>
                            <span className='text-trends-categories text-base ml-1'>Followers</span>
                        </span>
            </div>
            <div className='text-sm text-description-info'>
                Not followed by anyone you're following
            </div>
        </div>
    );
}

export default ProfileDescription;