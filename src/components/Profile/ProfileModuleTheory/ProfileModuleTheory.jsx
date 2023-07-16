import React from 'react';
import ProfileModule from '../ProfileModule/ProfileModule'

function ProfileModuleTheory(props) {
    return (
        <ProfileModule
        id="theory"
        title="Теория"
        discription="Здесь собраны все необходимые материалы, которые нужны для качественного освоения материлов в соответствии с выбранным классом"
        link={`${props.link}/theory`}
        />
    );
}

export default ProfileModuleTheory;