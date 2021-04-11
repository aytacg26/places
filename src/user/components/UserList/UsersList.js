import React from 'react';
import UserItem from '../UserItem/UserItem';
import './UsersList.css';

const UsersList = ({ users }) => {
  if (users.length === 0) {
    return (
      <div className='center'>
        <h2>No Users Found</h2>
      </div>
    );
  }

  return (
    <ul>
      {users.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};

export default UsersList;
