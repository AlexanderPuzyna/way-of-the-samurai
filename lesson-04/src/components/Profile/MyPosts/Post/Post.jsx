import React from 'react';
import s from'./Post.module.css';

const Post = (props) => {
    return(  
        <div className={s.item}>
        <img src='https://sun9-east.userapi.com/sun9-18/s/v1/if1/1qzBrqLOJRpROOSGzSQYx9-8gmZxBbdf1QJz4EoCh691sC1Ee-VDQi-7W4GtjSfhThwCuL6B.jpg?size=1280x1280&quality=96&type=album'/>
          {props.message}
          <div>
          <span>like</span>{props.likesCount}
          </div>
        </div>
       );
}

export default Post;