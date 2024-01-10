import React from 'react';
import {trendsArray} from '../../../shared/mocks/trendsMock';
import {ITrendItem} from '../../../shared/interfaces/ITrendItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
const Trends = () => {
    return(
        <div className='w-[348px] bg-grey-background mt-4 rounded-[16px]'>
            <div className='text-xl mt-3 ml-7 font-bold'>
                Trends for you
            </div>
            {trendsArray.map((trend:ITrendItem, index:number) => (
                <div key={index} className='flex flex-col mx-3 my-4'>
                    <div className='flex flex-row justify-between'>
                        <div className="text-ellipsis text-trends-categories text-sm">
                            {trend.category} {!!trend.category? ' -' : ''} {trend.trending? 'Trending' : ''} {!!trend.region? 'in' : ''} {trend.region}
                        </div>
                        <div className='text-trends-categories w-6 h-6'><MoreHorizIcon/></div>
                    </div>
                    <div>
                        <div className='text-trends-name text-base font-bold'>{trend.trendName}</div>
                    </div>
                    <div>
                        <div className='text-ellipsis text-trends-categories text-sm'>{trend.numberTweets} posts</div>
                    </div>
                </div>
            ))}
            <div className="flex py-4 px-4 items-center rounded-bl-[16px] rounded-br-[16px] text-post-blue hover:bg-header-hover h-10">
                Show more
            </div>
        </div>
    );

}

export default Trends;

