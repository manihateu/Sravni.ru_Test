import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../../action/usersActions';
import './Home.scss'
import UserCard from '../../components/userCard/UserCard.jsx';

const Home = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.user.data);
    const loading = useSelector((state) => state.user.loading);
  
    useEffect(() => {
      dispatch(fetchUser());
    }, [dispatch]);
  
    return (
        <div className='home__container'>
        {loading ? (
          <p>Loading users...</p>
        ) : users ? (
            <div className="users_container">
          {users.map((user) => (
            <UserCard name={user.name} username={user.username} email={user.email} phone={user.phone} company={user.company.name} id={user.id}/>
          ))}
          </div>
        ) : (
          <p>Failed to fetch users.</p>
        )}
      </div>
    );
}

export default Home