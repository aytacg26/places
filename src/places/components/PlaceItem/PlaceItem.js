import React, { Fragment, useState } from 'react';
import Card from '../../../shared/components/UIElements/Card/Card';
import Button from '../../../shared/components/FormElements/Button/Button';
import './PlaceItem.css';
import Modal from '../../../shared/components/UIElements/Modal/Modal';

const PlaceItem = ({ place }) => {
  const {
    id,
    imageUrl,
    title,
    description,
    address,
    creator,
    location,
  } = place;

  const [showMap, setShowMap] = useState(false);

  const mapHandler = () => setShowMap((prevState) => !prevState);

  return (
    <Fragment>
      <Modal
        show={showMap}
        onCancel={mapHandler}
        header={address}
        contentClass='place-item__modal-content'
        footerClass='place-item__modal-actions'
        footer={<Button onClick={mapHandler}>Close</Button>}
      >
        <div className='map-container'>
          <h2>THE MAP!</h2>
        </div>
      </Modal>
      <li className='place-item'>
        <Card className='place-item__content'>
          <div className='place-item__image'>
            <img src={imageUrl} alt={title} title={title} />
          </div>
          <div className='place-item__info'>
            <h2>{title}</h2>
            <h3>{address}</h3>
            <p>{description}</p>
          </div>
          <div className='place-item__actions'>
            <Button inverse onClick={mapHandler}>
              View on Map
            </Button>
            <Button to={`/places/${id}`}>Edit</Button>
            <Button danger>Delete</Button>
          </div>
        </Card>
      </li>
    </Fragment>
  );
};

export default PlaceItem;
