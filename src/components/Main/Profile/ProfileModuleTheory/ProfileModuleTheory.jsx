import React from 'react';
import ProfileModule from '../ProfileModule/ProfileModule'

function ProfileModuleTheory(props) {
    return (
        <ProfileModule
        id="theory"
        title="Теория"
        link={`${props.link}/theory`}
        />
    );
}

export default ProfileModuleTheory;