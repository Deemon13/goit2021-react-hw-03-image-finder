import React from 'react';

export const ImageGalleryItem = ({ url, name }) => {
  return (
    <li>
      <img src={url} alt={name} />
    </li>
  );
};
