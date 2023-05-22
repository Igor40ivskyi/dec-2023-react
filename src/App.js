import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

const fetchCars = () => async (dispatch) => {
    dispatch({type: 'START_LOADING'});
    let response = await fetch('http://owu.linkpc.net/carsAPI/v1/cars')
        .then(value => value.json());
    console.log(response);

    dispatch({type: 'SET_CARS', payload: response});



};

function App() {

    const state = useSelector(state => state);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCars());
    }, []);


    return (
        <div className="App">
            {state.isLoading && <h1>LOADING...</h1>}
            {state.cars.map(car => (
                <div key={car.id}> {car.brand}</div>
            ))}
        </div>
    );
}

export default App;
