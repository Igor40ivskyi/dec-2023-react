import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";


const fetchCars = () => async (dispatch) => {

        dispatch({type: 'SET_LOADING'});

    const response = await fetch('http://owu.linkpc.net/carsAPI/v1/cars')
        .then(value => value.json());

    dispatch({type: 'SET_CARS', payload: response});

};

function App() {

    const state = useSelector(state => state);
    const dispatch = useDispatch();


    useEffect(() => {

        dispatch(fetchCars());

        // dispatch({type:'SET_LOADING'})

    }, [dispatch]);



    return (
        <div className="App">
            {state.isLoading && <h2>LOADING.......</h2>}

            {
                state.cars.map(value => <div key={value.id}>{value.brand}</div>)
            }

        </div>
    );
}

export default App;
