import React from 'react';
import s from'./Post.module.css';

const Post = (props) => {
    return(  
        <div className={s.item}>
        <img src='https://cf.shopee.co.id/file/3d5fdb772608ecc4032245ec444da42a'/>
          {props.message}
          <div>
          <span>like</span>{props.likesCount}
          </div>
        </div>
       );
}

export default Post;