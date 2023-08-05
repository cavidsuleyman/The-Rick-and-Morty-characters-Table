import React, { useEffect, useState } from 'react';
import axios from 'axios'


const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/users"
})



const AxiosTest = () => {

    const [comment, setComment] = useState([])

    const getData = () => {
        api.get('/')
        .then((res) => {
            if(res) {
                setComment(res.data)
            }   
            return null;
        })
        .catch((err) => {
            console.log(err.message);
        })
    }

    const creteComment = async () => {
        let res = await api.post('/', {
            id: 1,
            name: "id labore ex et quam laborum",
            email: "cavid.suleymanov@gmail.com",
            body: "Salam"
        })

        console.log(res);
    }

    const deleteComment = (id) => {
        api.delete(`/${id}`)
        const commentList = comment.filter(comments => comments.id !== id)
        setComment(commentList)
    }


    useEffect(() => {
        getData()
    }, [])



    
  return (
    <>

<button onClick={creteComment}>Create Comment</button>

        <ol>
            {
                comment.map((v,i) => (
                    <li key={i}>
                        {v.address.zipcode}
                    
                        <button onClick={() => deleteComment(v.id)}>x</button>
                    </li>
                ))
            }
         </ol>

         
    </>
    
  )
}

export default AxiosTest
