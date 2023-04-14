import React from 'react';
import ProfileModuleBase from '../Profile/ProfileModuleBase/ProfileModulesBase';
import ProfileModuleTest from '../Profile/ProfileModuleTest/ProfileModuleTest';
import ProfileModuleTheory from '../Profile/ProfileModuleTheory/ProfileModuleTheory';

function ProfileGeometry() {
    return (
        <section className='ProfileGeometry'>
            <h2 className='Profile-title'>Геометрия</h2>
            <div className='ProfileAlgebra-content'>
                <ProfileModuleBase link='/geometry' />
                <ProfileModuleTheory link='/geometry' />
                <ProfileModuleTest link='/geometry' />
            </div>
        </section> 
    );
}

export default ProfileGeometry;