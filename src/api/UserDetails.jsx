import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const UserDetails = () => {

    const {id} = useParams()

    const [user,setUser] = useState({})

    useEffect(() => {

        const characterId = parseInt(id);

        if(characterId <= 0) {
            setUser(null);
            return;
        }

        fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
        .then(res => {
            if(!res.ok){
                throw new Error('Network response was not found')
            }
            return res.json();
        })
        .then(data => setUser(data))
        .catch(error => {
            console.log(error);
            setUser(null);
        })
    }, [id])


 
    if (!user) {
        return (
            <>
                <p>User not found.</p>
                <Link to="/">
                    <button>Back</button>
                </Link>
            </>
        );
    }

  return (
    <>
        <Link to='/'>
            <button>Back</button>
        </Link>
        <section className='user-details'>
          <div className='user-main'>
            <div className='user-image'>
                    <img src={user?.image} alt="" />
                </div>
                <div className='user-title'>
                    <h2>Name: {user?.name}</h2>
                    <p>Species: <span>{user?.species}</span> </p>
                    <p>Gender: <span></span> {user?.gender}</p>
                    <p>Status: <span></span> {user?.status}</p>
                    <p>Location: <span></span> {user?.origin?.name}</p>
                </div>
          </div>
          
        </section>
    </>
  )
}

export default UserDetails
