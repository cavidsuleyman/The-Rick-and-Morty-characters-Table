import { useState } from 'react';
import './App.css';
import AxiosProject from './api/AxiosProject';
import { UserContext } from './context/UserContext';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import EditData from './api/EditData';
import SearchSide from './api/SearchSide';
import UserDetails from './api/UserDetails';
// import AxiosTest from './api/AxiosTest';
// import FetchTest from './api/FetchTest';


const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api"
})


function App() {

  const [user, setUser] = useState([]);
  const [selectedRows, setSelectedRows] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(5)
  const [query, setQuery] = useState('')
  


  const getData = () => {
    api.get('/character')
      .then((res) => {
        console.log(res.data);
        if (res && res.data && res.data.results) {
          setUser(res.data.results); 
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const deleteData = (id) => {
    try {
      const postsList = user.filter(post => post.id !== id);
      setUser(postsList);
    }catch(err){
      console.log(err);
    }
      
  }

  const handleChange = (rowId, name) => {
    if(selectedRows.includes(rowId)){
      setSelectedRows(selectedRows.filter((id) => id !== rowId));
    }else{
      setSelectedRows([...selectedRows, rowId])
    }

    const newData = user.map((row) => {
      if(row.id === rowId) {
        return {...row, name}
      }
      return row;
    });

    setUser(newData)
  }

  const handleDeleteAll = (e) => {
      e.preventDefault()
      const newData = user.filter((row) => !selectedRows.includes(row.id));
      setUser(newData);
      setSelectedRows([]);
  }
 

  

return (
      <UserContext.Provider value={{deleteData,handleDeleteAll, selectedRows, setSelectedRows, handleChange,  query, setQuery, postPerPage, setPostPerPage, currentPage, setCurrentPage, getData , user , setUser}}>
        <BrowserRouter>
        <div className='main'>
        <SearchSide/>
            <Routes>
                <Route path='/' element={<AxiosProject/>}/>
                <Route path='/user/:id' element={<UserDetails/>} />
                <Route path='/edit' element={<EditData/>} />
            </Routes>
        </div>    
        </BrowserRouter>
      </UserContext.Provider>
  );
}


export default App;


