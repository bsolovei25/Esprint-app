import React, {useState} from "react";
import {defaultHomeHeaders, defaultTimelineHeaders} from "../../shared/constants/Headers";
import settings from "../../shared/assets/svg/settings.svg";
const HeadersBuilder: React.FC<{headersArray:string[], isTimelineSettingsAllowed: boolean}> = ({headersArray, isTimelineSettingsAllowed }) => {
    const [currentHomeHeader, setCurrentHomeHeader] = useState(defaultHomeHeaders);
    const [currentTimelineHeader, setTimelineCurrentHeader] = useState(defaultTimelineHeaders);
    function onHeaderChange(header : string) : void {
        isTimelineSettingsAllowed ? setCurrentHomeHeader(header) : setTimelineCurrentHeader(header);
    }

    function checkForDefaultHeader(header : string) : boolean {
        if (isTimelineSettingsAllowed) {
            return currentHomeHeader === header;
        }
        else {
            return currentTimelineHeader === header;
        }

    }
    return(
        <div className="bg-header-transperent cursor-pointer flex flex-row w-full items-center justify-center h-14 scroll-px-36">
            {headersArray.map((header) => (
                <div
                    onClick={() => onHeaderChange(header)}
                    className={'w-1/2 h-full flex flex-col relative items-center justify-center text-center hover:bg-opacity-100 hover:bg-header-hover transition'}>
                    <span>{header}</span>
                    {checkForDefaultHeader(header) ?
                        <div className="w-16 h-1 bg-post-blue rounded-full absolute bottom-0"/>
                        : ''}

                </div>
            ))}
            {isTimelineSettingsAllowed ?
                <div className="w-1/6 h-full flex items-center justify-center">
                    <span className='p-2 rounded-full hover:bg-header-hover'>
                        <img src={settings} alt="settings" className="h-[20px] w-[20px]" />
                    </span>
                </div>
                : null}
        </div>
    );

}

export default HeadersBuilder;

