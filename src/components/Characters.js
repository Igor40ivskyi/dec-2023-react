import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {characterService} from "../services";
import {characterActions} from "../redux";
import {Character} from "./Character";
import {useParams, useSearchParams} from "react-router-dom";

const Characters = () => {

    const dispatch = useDispatch();

    const {characters} = useSelector(state => state.characters);

    const [query, setQuery] = useSearchParams();


    useEffect(() => {
        setQuery(prev => ({...prev, page: '1'}));
    },[]);

    useEffect(() => {
        characterService.getAll(query.get('page')).then(value => value.data).then(value => dispatch(characterActions.setCharacters(value)));
    },[dispatch,query]);

    return (
        <div>
            {characters.map(value => <Character key={value.id} character={value}/>)}
        </div>
    );
};

export {Characters};