import FollowHeaders from "../FollowHeaders/FollowHeaders";
import CreatePost from "../../shared/components/CreatePost/CreatePost";
import React from "react";

const Home = () => {
    return(
        <div className="flex flex-col">
            <FollowHeaders></FollowHeaders>
            <CreatePost></CreatePost>
        </div>
    );

}

export default Home;

