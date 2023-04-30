import React from 'react';
import Simpson from "../Simpson/Simpson";

const Simpsons = () => {

    const simpsons = [
        {
            id: 1,
            name: 'Liza',
            image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-simpsons-lisa-1589201259.jpg'
        },
        {
            id: 2,
            name: 'Bart',
            image: 'https://www.wikihow.com/images_en/thumb/e/eb/Color-Step-8-2.jpg/v4-460px-Color-Step-8-2.jpg'
        },
        {
            id: 3,
            name: 'Homer',
            image: 'https://media.npr.org/assets/img/2014/05/08/simp2006_homerarmscrossed_f_custom-ec94cc7a10463aa8260b2c5a9a3ebea29c7ecbfe.jpg'
        },
        {
            id: 4,
            name: 'Mardge',
            image: 'https://i.pinimg.com/originals/b4/12/df/b412df22307d21267bf26b61d0b5b811.jpg'
        },
        {
            id: 5,
            name: 'Maggie',
            image: 'https://i.discogs.com/OCEI91oQOkbvLbA5f1rUpLSsjO_GQ38oyNataTCbJ7g/rs:fit/g:sm/q:90/h:514/w:550/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTI2MzMx/MjktMTQyMzQxNDg4/NC02Nzc5LmpwZWc.jpeg'
        }
    ];

    return (
        <div>
            {simpsons.map(value=> <Simpson simpson={value} key={value.id}/>)}
        </div>
    );
};

export default Simpsons;