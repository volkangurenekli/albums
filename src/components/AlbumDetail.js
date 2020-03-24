import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({album}) => {
  const {title, artist, thumbnail_image, image} = album;
  const {
    headerContentStyle,
    thumbnailStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle,
  } = styles;
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle} source={{uri: thumbnail_image}} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{artist}</Text>
          <Text>{title}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={imageStyle} source={{uri: image}} />
      </CardSection>
      <CardSection>
        <Text>{title}</Text>
      </CardSection>
    </Card>
  );
};

export default AlbumDetail;

const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18,
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
});
