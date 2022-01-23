import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';

import { fetchImagesWithQuery } from 'services/fetch-images';

export class ImageGallery extends Component {
  state = {
    images: [],
    loading: false,
    page: 1,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.queryForRender !== this.props.queryForRender) {
      this.setState({ page: 0, images: [] });
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { queryForRender } = this.props;
    const { page } = this.state;
    this.setState({ loading: true });
    fetchImagesWithQuery(queryForRender, page)
      .then(images =>
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        }))
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  render() {
    const { images, loading } = this.state;
    const { queryForRender } = this.props;
    return (
      <>
        {loading && <h1>Loading...</h1>}
        {!queryForRender && <div>Input image for search</div>}
        <ul>
          {images &&
            images.map(({ id, webformatURL, user }) => {
              return (
                <ImageGalleryItem key={id} url={webformatURL} name={user} />
              );
            })}
        </ul>
      </>
    );
  }
}
