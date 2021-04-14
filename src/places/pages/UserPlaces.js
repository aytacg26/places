import React from 'react';
import { useParams } from 'react-router-dom';
import PlacesList from '../components/PlacesList/PlacesList';

const DUMMY_PLACES = [
  {
    id: 'plc-0001-15',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world',
    imageUrl: 'https://i.ibb.co/Ht78WNG/images.jpg',
    address: '20 W 34th St, New York, NY 10001, United States',
    location: {
      lat: 40.7484405,
      lng: -73.9856644,
    },
    creator: '1-anj-151-tk',
  },
  {
    id: 'plc-0032-17',
    title: 'Empire State Building by Aslı',
    description: 'One of the most famous sky scrapers in the world',
    imageUrl: 'https://i.ibb.co/Ht78WNG/images.jpg',
    address: '20 W 34th St, New York, NY 10001, United States',
    location: {
      lat: 40.7484405,
      lng: -73.9856644,
    },
    creator: '2-hjk-122-tr',
  },
];

const UserPlaces = (props) => {
  const { userId } = useParams();
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);

  return <PlacesList places={loadedPlaces} />;
};

export default UserPlaces;
