import React from 'react'

const SearchItem = ({...user}) => {
    return (  
        <div key={user.id} className="resultado" >
            <p>{user.name}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
        </div>
    );
}
 
export default SearchItem;