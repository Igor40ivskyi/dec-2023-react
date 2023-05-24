import {useSelector} from "react-redux";

const Header = () => {

    const {count1Reducer: {count1}, count2Reducer: {count2}} = useSelector(state => state);

    return (
        <div>
            <div>count1 : {count1}</div>
            <div>count2: {count2}</div>

        </div>
    );
};

export {Header};