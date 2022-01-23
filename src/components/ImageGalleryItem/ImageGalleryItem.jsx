import React from 'react';
import PropTypes from 'prop-types';

import {
  ImageGalleryListItem,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ url, name }) => {
  return (
    <ImageGalleryListItem>
      <ImageGalleryItemImage src={url} alt={name} />
    </ImageGalleryListItem>
  );
};

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
