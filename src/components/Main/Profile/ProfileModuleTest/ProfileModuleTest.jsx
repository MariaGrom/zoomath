import React from 'react';
import ProfileModule from '../ProfileModule/ProfileModule'

function ProfileModuleTest(props) {
    return (
        <ProfileModule
        id="test"
        title="Контрольные работы"
        link={`${props.link}/test`}
        />
    );
}

export default ProfileModuleTest;