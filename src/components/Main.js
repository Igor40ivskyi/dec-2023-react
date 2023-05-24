import {useSelector} from "react-redux";
import {count2Reducer} from "../redux/slices/count2Slice";

const Main = () => {

    const {count1Reducer: {count1}, count2Reducer: {count2,count3}} = useSelector(state => state);

    console.log(count3);

    return (
        <div>
            <div>count1 - {count1}</div>
            <div>count2 - {count2}</div>
        </div>
    );
};

export {Main};