import {useEffect} from "react";
import {characterService} from "../../services";
import {useDispatch, useSelector} from "react-redux";
import {characterActions} from "../../redux";
import {Character} from "../Character/Character";
import {useSearchParams} from "react-router-dom";

const Characters = () => {

    const dispatch = useDispatch();

    const {characters} = useSelector(state => state.character);

    const [query, setQuery] = useSearchParams();

    useEffect(() => {
        setQuery({page: '1'});
    }, [setQuery]);


    useEffect(() => {
        characterService.getCharacters(+query.get('page')).then(value => value.data)
            .then(value => dispatch(characterActions.setCharacters(value)));
    }, [dispatch, query]);

    return (
        <div>
            {characters.map(value => <Character key={value.id} character={value}/>)}
        </div>
    );
};

export {Characters};