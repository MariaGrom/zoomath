import React from 'react';
import './Profile.css';
import ProfileModuleBase from './ProfileModuleBase/ProfileModulesBase';
import ProfileModuleTheory from './ProfileModuleTheory/ProfileModuleTheory';
import ProfileModuleTest from './ProfileModuleTest/ProfileModuleTest';

function Profile(props) {

    const { title } = props

    return (
        <div className='Profile'>
            <h2 className='Profile-title'>{title}</h2>
            <div className='Profile-content'>
                <ProfileModuleBase />
                <ProfileModuleTheory />
                <ProfileModuleTest />
               
            </div>
        </div>
    );
}

export default Profile;