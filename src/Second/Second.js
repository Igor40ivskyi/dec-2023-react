import React, {useContext} from 'react';
import Third from "../Third/Third";
import {MyContext} from "../index";

const Second = () => {

    const value = useContext(MyContext);
    value.users = [{name:'vasya',age:31},{name:'dima',age:22},{name:'rulya', age: 45}]

    return (
        <div>
            <Third/>
        </div>
    );
};

export default Second;