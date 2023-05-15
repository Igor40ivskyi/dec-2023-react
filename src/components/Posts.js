import React, {useEffect, useState} from 'react';

const Posts = ({flag}) => {

    console.log('constructor');

    const [flag2,setFlag2] = useState(true);

    useEffect(() => {
        console.log('componentDidMount');
        return () => {
            console.log('componentWillUnmount');
        };
    }, []);


    useEffect(() => {
        console.log('componentDidUpdate');
        return () => {
            console.log('componentWillUnmount');
        };
    },[flag2]);

    return (
        <>
            {console.log('render')}
            <div>
                Posts component
                <button onClick={() => setFlag2(prevState => !prevState)}>update</button>
            </div>
        </>
    );
};

export default Posts;