import React, { Component } from 'react';
import {
    StyleSheet, 
    View
 } from 'react-native';
 import AlbumDetail from './AlbumDetail';

 export default class AlbumList extends Component {
    state = {
        albums: []
    }

    componentWillMount() {
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => response.json())
        .then(data => {
            this.setState({
                albums: data
            })
        })
    }

    // Render all the albums that were fetched from the API
    renderAlbums() {
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} album={album} />
        )
    }

    render() {
        return (
            <View>
                {this.renderAlbums()}
            </View>
          )
    }
}

const styles = StyleSheet.create({

})