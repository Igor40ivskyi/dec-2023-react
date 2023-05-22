const baseURL = 'http://owu.linkpc.net/carsAPI/v1/cars';

const getCars = () => {
    return fetch(baseURL).then(value => value.json());
};

const saveCar = (car) => {
    return fetch(baseURL,{method: 'POST',
    headers:{
        'Accept':'application/json',
        'Content-Type': 'application/json',
    },
    body:JSON.stringify(car)
    })
};

export {
    getCars,
    saveCar
};

