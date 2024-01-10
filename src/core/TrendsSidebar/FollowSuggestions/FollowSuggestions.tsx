import {FollowSuggestionsArray} from "../../../shared/mocks/whoFollowMock";
import AccountSwitcher from "../../AccountSwitcher/AccountSwitcher";
import React from "react";

const FollowSuggestions = () => {
    return(
        <div className='w-[348px] bg-grey-background mt-4 rounded-[16px] cursor-pointer'>
            <div className='text-xl my-3 ml-7 font-bold'>
                Who to follow
            </div>
            {
                FollowSuggestionsArray.map((user, index) => (
                    <div key={index}>
                        <AccountSwitcher userInfo = {user} isUserLogInBox = {false}/>
                    </div>
                ))
            }
            <div className="flex py-4 px-4 items-center rounded-bl-[16px] rounded-br-[16px] text-post-blue hover:bg-header-hover h-10">
                Show more
            </div>
        </div>
    );

}

export default FollowSuggestions;