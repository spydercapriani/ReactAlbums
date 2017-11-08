import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

export default class AlbumDetail extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <View>
                        <Image style={styles.artistImage} source={{uri: this.props.album.thumbnail_image}}/>
                    </View>
                    <View style={styles.artistDetailsHeader}>
                        <Text>{this.props.album.title}</Text>
                        <Text>{this.props.album.artist}</Text>
                    </View>
                </CardSection>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    artistImage: {
        width: 50,
        height: 50
    },
    artistDetailsHeader: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        paddingLeft: 10
    }
  });