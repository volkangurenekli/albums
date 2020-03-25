import React, {Component} from 'react';
import {Text, ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
export class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
    };
  }
  componentDidMount() {
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({albums: response.data}));
  }
  renderAlbums() {
    return this.state.albums.map(album => (
      <AlbumDetail key={album.title} album={album} />
    ));
  }
  renderEmpty() {
    return <Text>Albums</Text>;
  }
  render() {
    return (
      <ScrollView>
        {this.state.albums.length > 0
          ? this.renderAlbums()
          : this.renderEmpty()}
      </ScrollView>
    );
  }
}

export default AlbumList;
