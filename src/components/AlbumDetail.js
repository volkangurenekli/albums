import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = props => {
  return (
    <Card>
      <CardSection>
        <Text>{props.album.title}</Text>
      </CardSection>
      <CardSection>
        <Text>{props.album.title}</Text>
      </CardSection>
      <CardSection>
        <Text>{props.album.title}</Text>
      </CardSection>
    </Card>
  );
};

export default AlbumDetail;

const styles = StyleSheet.create({});
