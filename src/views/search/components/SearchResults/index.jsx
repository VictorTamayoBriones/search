import React from 'react'
import SearchItem from './SearchItem';
import "./style.css";

const SearchResults = ({results, isSearching}) => {
    return (
        <div>
            { !results.length && isSearching && <p>No hay resultados</p>}
            {
                results?.map((user) => <SearchItem {...user} />)
            }
        </div>
    );
}
 
export default SearchResults;