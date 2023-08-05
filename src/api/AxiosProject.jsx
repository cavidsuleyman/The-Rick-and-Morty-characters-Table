import React, { useContext, useEffect } from 'react';
import UserData from './UserData';
import { UserContext } from '../context/UserContext';
import PagePagination from './PagePagination';

const AxiosProject = () => {
  
const {getData , user, currentPage, postPerPage, setCurrentPage } = useContext(UserContext);

const lastPostIndex = currentPage * postPerPage;
const firstPostIndex = lastPostIndex - postPerPage

const currentPost  = user.slice(firstPostIndex, lastPostIndex)

useEffect(() => {
    getData()
  }, []);


  return (
    <>
        <table>
            <thead>
                <tr>
                  <th>No.</th>
                  <th>Name</th>
                  <th>Avatar</th>
                  <th>Origin</th>
                  <th>Gender</th>
                  <th>Status</th>
                  <th>Delete&Edit</th>
                </tr>
            </thead>

            <tbody>
              <UserData users={currentPost}/>
            </tbody>
        </table>

        <PagePagination 
        totalPosts={user.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        />
    </>
  );
};

export default AxiosProject;

