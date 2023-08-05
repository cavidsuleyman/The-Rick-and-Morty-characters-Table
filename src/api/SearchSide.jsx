import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext';

const SearchSide = () => {

const {setQuery, handleDeleteAll} = useContext(UserContext)




  // const searchUser = (e) => {
  //     e.preventDefault();
  //     let search = e.target.value;
  //     setUser(user.filter(v => v.name.toUpperCase().match(search.toUpperCase())))
  // }


  return (
    <>
    <form>
        <label htmlFor="search">Characters</label>
        <input
                    id="search"
                    type="text"
                    placeholder="Search Posts"
                    onChange={(e) => setQuery(e.target.value)}
                />


        <select name="" id="">
            <option value="All">All</option>
            <option value="Human">Human</option>
            <option value="Alien">Alien</option>
        </select>

        <button onClick={handleDeleteAll} className='delete-all-data'>All Delete</button>
    </form>
    
    </>
  )
}

export default SearchSide
