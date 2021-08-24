import React, {useState} from 'react'
import "./style.css";

const SearchBox = ({ onSearch, onClose, isSearching }) => {
    const [searchText, setSearchText]=useState('');

    const handleClose = ()=>{
        setSearchText('');
        onClose();
    }

    return (  
        <div className="search-box" >
            <h2 className="search-box-title" >Buscador de personal</h2>
            <div className="search-box-buttons" >
                <label>
                    <input className="search-box-input" type="text" value={searchText} onChange={({target: {value}})=>setSearchText(value)} />
                </label>
                <button onClick={() => onSearch(searchText)} disabled={!searchText?.length} >Buscar</button>
                { isSearching && <button onClick={handleClose} >Cerrar</button> }
            </div>
        </div>
    );
}
 
export default SearchBox;