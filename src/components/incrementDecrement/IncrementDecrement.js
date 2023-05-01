import React, {useState} from 'react';

const IncrementDecrement = () => {

    console.log('start');

    let [counter, setCounter] = useState('fox');

    const increment = () => {
        console.log('increment');
        setCounter(++counter);

        console.log(counter);
        console.log('===================================');
    };

    const decrement = () => {
        console.log('increment');
        counter--;
        console.log(counter);
    };

    console.log('finish');

    return (
        <div>

            <h2>value is = {counter}</h2>


            <button onClick={increment}>increment</button>

            <button onClick={decrement}>decrement</button>

        </div>
    );
};

export default IncrementDecrement;