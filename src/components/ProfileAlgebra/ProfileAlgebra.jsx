import React from 'react';
import './ProfileAlgebra.css'
import ProfileModuleBase from '../Profile/ProfileModuleBase/ProfileModulesBase';
import ProfileModuleTheory from '../Profile/ProfileModuleTheory/ProfileModuleTheory';
import ProfileModuleTest from '../Profile/ProfileModuleTest/ProfileModuleTest';

function ProfileAlgebra() {
    return (
        <section className='ProfileAlgebra'>
            <h2 className='Profile-title'>Алгебра</h2>
            <div className='ProfileAlgebra-content'>
                <ProfileModuleBase link='/algebra' />
                <ProfileModuleTheory link='/algebra' />
                <ProfileModuleTest link='/algebra' />
            </div>
        </section>
    );
}

export default ProfileAlgebra;