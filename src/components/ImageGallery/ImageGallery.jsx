import React from 'react';
import PropTypes from 'prop-types';

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <>
      <ImageGalleryList>
        {images.map(({ id, webformatURL, user }) => {
          return <ImageGalleryItem key={id} url={webformatURL} name={user} />;
        })}
      </ImageGalleryList>
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
