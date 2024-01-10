import React from 'react';
import '../../styles/tailwind.css';
import {PostButtonProps} from '../../interfaces/ICssPropsParameters'

const PostButton: React.FC<PostButtonProps> = ({postButtonStyle = {}}) => {
    return(
        <button style={postButtonStyle} className="post_button shadow font-bold rounded-3xl w-60 h-12 text-default-white text-xl mt-3 bg-post-blue hover:bg-post-hover-blue">
            Post
        </button>
    );
}

export default PostButton;