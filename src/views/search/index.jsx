import React, { useState } from 'react'
import SearchBox from './components/SearchBox/SearchBox';
import "./style.css";
import data from '../../data/users.json';
import SearchResults from './components/SearchResults';

const Seacrh = () => {

    const [isAtTop, setIsAtTop]=useState(false);
    const [results, setResults]=useState([]);

    const handleOpenSearch = (searchText)=> {
        setIsAtTop(true)
        if( data?.length ){
            const searchTextMinus = searchText.toLocaleLowerCase();
            const filterData = data.filter((user)=>(
                user.name.toLocaleLowerCase().includes(searchTextMinus)  || 
                user.phone.toLocaleLowerCase().includes(searchTextMinus) ||
                user.email.toLocaleLowerCase().includes(searchTextMinus) ||
                user.username.toLocaleLowerCase().includes(searchTextMinus)
            ));
            setResults(filterData);
        }
    };
    const handleCloseSearch = ()=> {
        setIsAtTop(false)
        setResults([]);
    };
    
    return (
        <div className={`search ${isAtTop ? 'search--top' : 'search--center' }`} >
            <SearchBox onSearch={handleOpenSearch} onClose={handleCloseSearch} isSearching={isAtTop} />
            <SearchResults results={results} isSearching={isAtTop} />
        </div>
    );
}
 
export default Seacrh;