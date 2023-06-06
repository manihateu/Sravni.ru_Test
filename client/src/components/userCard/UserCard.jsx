import React, { useState } from 'react';
import './userCard.scss';
import { useNavigate } from 'react-router-dom';

const UserCard = (props) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/user/${props.id}`);
      };

  return (
    <div className="user__card" onClick={handleClick}>
      <div className='card__row'>
        <p>Name:</p>
        <p>{props.name}</p>
      </div>
      <div className='card__row'>
        <p>Username:</p>
        <p>{props.username}</p>
      </div>
      <div className='card__row'>
        <p>Email:</p>
        <p>{props.email}</p>
      </div>
      <div className='card__row'>
        <p>Phone:</p>
        <p>{props.phone}</p>
      </div>
      <div className="show_company_container">
          <div className='card__row company__info'>
            <p>Company:</p>
            <p>{props.company}</p>
          </div>
      </div>
    </div>
  );
};

export default UserCard;
