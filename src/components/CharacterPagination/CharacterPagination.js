import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

const CharacterPagination = () => {

    const {prevPage, nextPage} = useSelector(state => state.character);

    const [,setQuery] = useSearchParams();


    return (
        <div>
            <button
                disabled={!prevPage} onClick={() => setQuery(prev => ({...prev, page: +prev.get('page') - 1}))}>
                prev
            </button>

            <button disabled={!nextPage}
                    onClick={() => setQuery(prev => ({...prev, page: +prev.get('page') + 1}))}>next
            </button>
        </div>
    );
};

export {CharacterPagination};