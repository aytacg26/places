import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../../shared/components/UIElements/Card/Card';
import PlaceItem from '../PlaceItem/PlaceItem';
import './PlaceList.css';

const PlacesList = ({ places, userId }) => {
  if (places?.length === 0) {
    return (
      <div className='place-list center'>
        <Card>
          <h2>No Places Found.</h2>
          <button>Share a Place</button>
        </Card>
      </div>
    );
  }

  return (
    <ul className='place-list'>
      {places?.map((place) => (
        <PlaceItem key={place.id} place={place} />
      ))}
    </ul>
  );
};

export default PlacesList;
