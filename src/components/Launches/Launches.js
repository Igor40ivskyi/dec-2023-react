import React, {useEffect, useState} from 'react';
import Launch from "../Launch/Launch";

const Launches = () => {

    let [launches, setLaunches] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => setLaunches(value));
    }, []);

    return (
        <div>
            {
                launches.map((value,index) => <Launch key={index} launch={value}/>)
            }
        </div>
    );
};

export default Launches;