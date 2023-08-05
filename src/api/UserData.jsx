import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { FcOk, FcHighPriority, FcDecision } from "react-icons/fc";
import { Link } from 'react-router-dom';

const UserData = ({users}) => {

const {deleteData, query, handleChange, selectedRows} = useContext(UserContext)

const statusMsg = (status) => {
  switch(status) {
      case "Alive": return  <><FcOk style={{marginRight: '5px'}}/> Alive </>;
      case "Dead": return <> <FcHighPriority style={{marginRight: '5px'}}/> Dead </> ;
      case "unknown": return <> <FcDecision style={{marginRight: '5px'}}/> unknown </>;
      default : {
          console.error("Message is not found");
      }
  }
}




  return (
    <>
      {
        users.filter(user => user.name.toLowerCase().includes(query)).map((v,i) => (
            <tr className={v.status === 'Dead' ? 'grey-bg' : ''} key={i}>
                <td style={{textAlign: 'center'}}>
                  <input 
                  type="checkbox" 
                  checked={selectedRows.includes(v.id)}
                  onChange={() => handleChange(v.id, v.name)}
                  />
                  </td>
                <td style={{textAlign: 'center'}}>
                  <Link className='link' to={`/user/${i+1}`}>
                    <h3>{v.name}</h3>
                  </Link>
                    <span>{v.species}</span>
                </td>
                <td style={{textAlign: 'center'}}>
                    <img  src={v.image} alt="" width={50} />
                </td>
                <td style={{textAlign: 'center'}}>
                    <p>{v.origin.name}</p>
                </td>
                <td style={{textAlign: 'center'}}>
                    <p>{v.gender}</p>
                </td>
                <td  style={{textAlign: 'center'}}>
                    <p className='text'>{statusMsg(v.status)}</p>
                </td>
                <td style={{textAlign: 'center'}}>
                    <button onClick={() => deleteData(v.id)}>Delete</button>
                    <Link to='/edit'>
                       <button>Edit</button>
                    </Link>
                    
                </td>
            </tr>
        ))
      }
    </>
  )
}

export default UserData
