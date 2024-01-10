import React, {useState} from 'react';

const FollowButton = () => {
    const [isFollowTouched, setFollowTouched] = useState(false);
    function onFollowButtonClick() : void {
        setFollowTouched(!isFollowTouched);
    }
    return (
        <div className='flex h-8 min-w-20 items-center'>
        {!isFollowTouched ?
                <div className="bg-trends-name rounded-3xl px-4 py-1 hover:bg-follow-hover text-transperent-white" onClick={onFollowButtonClick} >
                    Follow
                </div>:
                <div className="bg-grey-background rounded-3xl px-4 py-1 hover:bg-pink-unfollow hover:text-red-unfollow" onClick={onFollowButtonClick} >
                    Unfollow
                </div>
        }
        </div>
    );
};

export default FollowButton;