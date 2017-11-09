import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import CustomButton from './CustomButton';

export default class AlbumDetail extends Component {

    render() {
        // Destructure album prop
        const album = this.props.album;
        const { title, artist, thumbnail_image, image, url } = album;
        // Destructure styles object
        const { artistImage, albumDetailsHeader, albumTitle, imageContainer, albumImage } = styles

        return (
            <Card>
                <CardSection>
                    <View style={imageContainer}>
                        <Image style={artistImage} source={{uri: thumbnail_image}}/>
                    </View>
                    <View style={albumDetailsHeader}>
                        <Text style={albumTitle}>{title}</Text>
                        <Text>{artist}</Text>
                    </View>
                </CardSection>
                <CardSection>
                    <Image style={albumImage} source={{uri: image}}/>
                </CardSection>
                <CardSection>
                    <CustomButton onPress={() => Linking.openURL(url)}>
                        Buy Now!
                    </CustomButton>
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
    albumDetailsHeader: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        paddingLeft: 10
    },
    albumTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    albumImage: {
        height: 300,
        flex: 1,
        width: null
    }
  });