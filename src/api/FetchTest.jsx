import { useEffect, useState } from 'react';



function FetchTest() {

const [todos, setTodos] = useState([]);

const data_url = "https://jsonplaceholder.typicode.com/comments"

useEffect(() => {
  fetch(data_url)
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    setTodos(data)
  })
},[])



  return (
    <ol>
      {
        todos.map((v,i) => (
          <li key={i}>{v.email}</li>
        ))
      }
    </ol>
  );
}

export default FetchTest;
