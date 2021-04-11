import React from 'react';

import './Avatar.css';

const Avatar = ({ image, alt, title, width, className, style }) => {
  return (
    <div className={`avatar ${className}`} style={style}>
      <img
        src={image}
        alt={alt}
        style={{ width: width, height: width }}
        title={title}
      />
    </div>
  );
};

export default Avatar;
