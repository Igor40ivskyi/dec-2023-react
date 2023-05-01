import React from 'react';

const Launch = ({launch}) => {

    const {mission_name, launch_year,links:{mission_patch_small}} = launch;

    return (
        <div>
            {
                +launch_year !== 2020 &&
                <div>

                    <div>mission_name - {mission_name}</div>
                    <div>launch_year - {launch_year}</div>
                    <img src={mission_patch_small} alt={mission_name}/>

                </div>
            }
        </div>
    );
};

export default Launch;