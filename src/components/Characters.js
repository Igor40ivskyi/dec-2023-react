import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {characterService} from "../services";
import {characterActions} from "../redux";

const Characters = () => {

    const dispatch = useDispatch();


    useEffect(() => {
        characterService.getAll().then(value => value.data).then(value => dispatch(characterActions.setAll(value)));
    },[]);

    return (
        <div>
            Characters
        </div>
    );
};

export {Characters};