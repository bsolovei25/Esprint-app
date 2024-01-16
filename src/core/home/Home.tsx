import HeadersBuilder from '../HeadersBuilder/HeadersBuilder';
import CreatePost from '../../shared/components/CreatePost/CreatePost';
import React from 'react';
import { homeTimelineHeaders } from '../../shared/constants/Headers';

const Home = () => {
    return(
        <div className="flex flex-col">
            <div className='border-x border-b-[1px]'>
                <HeadersBuilder headersArray={homeTimelineHeaders} isTimelineSettingsAllowed={true}/>
            </div>
            <CreatePost/>
        </div>
    );

}

export default Home;

