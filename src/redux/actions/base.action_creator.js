export const decrement = (num) => {
    return {type: 'DEC', payload: num};
};

export const increment = (num) => {
    return {type: 'INC', payload: num}
};

export const reset = () => ({type: 'RESET'});