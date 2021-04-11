import React from 'react';
import UsersList from '../components/UserList/UsersList';

const User = () => {
  //This will be fetched from backend
  const users = [
    {
      id: '1-anj-151-tk',
      name: 'Aytac Guley',
      places: 10,
      image: 'https://i.ibb.co/sqdtZ8s/User-Profile-PNG.png',
    },
    {
      id: '2-hjk-122-tr',
      name: 'Aslı Guley',
      places: 18,
      image: 'https://i.ibb.co/sqdtZ8s/User-Profile-PNG.png',
    },
    {
      id: '3-plu-132-kl',
      name: 'Ziba Guley',
      places: 25,
      image: 'https://i.ibb.co/sqdtZ8s/User-Profile-PNG.png',
    },
    {
      id: '4-ulk-120-jj',
      name: 'Halil Guley',
      places: 12,
      image: 'https://i.ibb.co/sqdtZ8s/User-Profile-PNG.png',
    },
    {
      id: '5-plo-198-tt',
      name: 'Fatma Guley',
      places: 0,
      image: 'https://i.ibb.co/sqdtZ8s/User-Profile-PNG.png',
    },
  ];

  return (
    <div>
      <UsersList users={users} />
    </div>
  );
};

export default User;
