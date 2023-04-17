import React from 'react';
import ProfileModule from '../ProfileModule/ProfileModule'

function ProfileModuleTest(props) {
    return (
        <ProfileModule
        id="test"
        title="Контрольные работы"
        discription="В этом разделе вы найдете сконфигурированные контрольные работы. Выбрав определенный уровень сложности, вы сможете проверить уровень своей подготовки!"
        link={`${props.link}/test`}
        />
    );
}

export default ProfileModuleTest;