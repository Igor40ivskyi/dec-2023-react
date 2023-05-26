const Character = ({character}) => {

    const {name, status, gender,image} = character;

    return (
        <div>
            <div>name - {name}</div>
            <div>status - {status}</div>
            <div>gender - {gender}</div>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Character};