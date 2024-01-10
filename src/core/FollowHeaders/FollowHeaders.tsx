import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
const FollowHeaders = () => {
    return(
        <div className="bg-header-transperent flex flex-row w-full items-center justify-center h-14 scroll-px-36 border-x border-b-[1px]">
            <div className="w-1/2 h-full flex items-center justify-center text-center hover:bg-opacity-100 hover:bg-header-hover transition">
                For you
            </div>
            <div className="w-1/2 h-full flex items-center justify-center text-center hover:bg-opacity-100 hover:bg-header-hover transition">
                Following
            </div>
            <div className="w-1/6 h-full flex items-center justify-center hover:bg-header-hover">
                <SettingsOutlinedIcon/>
            </div>
        </div>
    );

}

export default FollowHeaders;

