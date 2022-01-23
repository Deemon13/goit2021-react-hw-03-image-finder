import React, { Component } from 'react';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    searchBarQuery: '',
  };

  handleSubmitSearchBar = query => {
    this.setState({ searchBarQuery: query });
    console.log(query);
  };

  render() {
    return (
      <>
        <Searchbar onSubmitSearch={this.handleSubmitSearchBar} />

        <ImageGallery queryForRender={this.state.searchBarQuery} />
      </>
    );
  }
}
