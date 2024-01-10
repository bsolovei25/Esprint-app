import Default_pfp from '../../assets/Default_pfp.png';
import React, { useState } from 'react';
import { Input  } from '@mui/material';
import media from '../../assets/svg/media.svg'
import gif from '../../assets/svg/gif.svg'
import poll from '../../assets/svg/poll.svg'
import emoji from '../../assets/svg/emoji.svg'
import schedule from '../../assets/svg/schedule.svg'
import geo from '../../assets/svg/geo.svg'
import PostButton from "../post-button/PostButton";

const inputProps =
    {
        'disableUnderline': true
    };

const postButtonStyles = {
    height: '36px',
    width: '66px',
    marginTop: '0px',
    fontSize: '15px'
};

const CreatePost = () => {
    const [isButtonTouched, setIsButtonTouched] = useState(false);
    return (
        <div className="flex flex-col w-full h-32 scroll-px-36 border-x border-b-[1px]">
            <div className="flex flex-row mt-3">
                <img className="h-auto w-[40px] h-[40px] ml-3" src={Default_pfp} alt="default profile" />
                <div className="flex-col h-full">
                    <Input
                        className="h-full ml-3"
                        placeholder="What is happening?!"
                        {...inputProps}
                    />
                </div>
            </div>
            <div className="w-full h-full flex flex-row items-center justify-around">
                <div className="flex flex-row">
                    <div className="flex items-center justify-center h-full h-[30px] w-[30px] hover:bg-sky-500/10 rounded-full ml-2">
                        <img src={media} alt="media svg" className="h-[20px] w-[20px] "/>
                    </div>
                    <div className="flex items-center justify-center h-full h-[30px] w-[30px] hover:bg-sky-500/10 rounded-full ml-2">
                        <img src={gif} alt="gif svg" className="h-[20px] w-[20px] "/>
                    </div>
                    <div className="flex items-center justify-center h-full h-[30px] w-[30px] hover:bg-sky-500/10 rounded-full ml-2">
                        <img src={poll} alt="poll svg" className="h-[20px] w-[20px] "/>
                    </div>
                    <div className="flex items-center justify-center h-full h-[30px] w-[30px] hover:bg-sky-500/10 rounded-full ml-2">
                        <img src={emoji} alt="emoji svg" className="h-[20px] w-[20px] "/>
                    </div>
                    <div className="flex items-center justify-center h-full h-[30px] w-[30px] hover:bg-sky-500/10 rounded-full ml-2">
                        <img src={schedule} alt="schedule svg" className="h-[20px] w-[20px] "/>
                    </div>
                    <div className="flex items-center justify-center h-full h-[30px] w-[30px] hover:bg-sky-500/10 rounded-full ml-2">
                        <img src={geo} alt="geo svg" className="h-[20px] w-[20px] "/>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <PostButton postButtonStyle={postButtonStyles}></PostButton>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;