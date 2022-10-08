import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from'./Profile.module.css';

const Profile = () => {
    return  <div>
    <div>
      <img src='https://www.ukinbound.org/wp-content/uploads/2020/07/We-Are-Tourism-BCP-875x350.jpg' />
    </div>
    <div>
      ava+description
    </div>
    <MyPosts/>
  </div>
}

export default Profile;