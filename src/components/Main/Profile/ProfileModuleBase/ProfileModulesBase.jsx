import React from 'react';
import ProfileModule from '../ProfileModule/ProfileModule'

function ProfileModuleBase(props) {
    const{link} = props
    return (

        <ProfileModule
        id="base"
        title="База вопросов"
        discription="Большая база заданий по каждой теме! Все задания отсортированы по теме и сложности, чтобы можно было постепенно улучшать свои знания"
        link={`${link}/base`}
        />

    );
}

export default ProfileModuleBase;