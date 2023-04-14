import React from 'react';
import ProfileModule from '../ProfileModule/ProfileModule'

function ProfileModuleBase(props) {
    const{link} = props
    return (

        <ProfileModule
        id="base"
        title="База вопросов"
        link={`${link}/base`}
        />

    );
}

export default ProfileModuleBase;