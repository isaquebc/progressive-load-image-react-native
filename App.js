import React from 'react';
import { StyleSheet, View, Dimensions, Image } from 'react-native';
import ProgressiveImage from './components/ProgressiveImage';

const w = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ width: 358, height: 40, backgroundColor: 'red' }} />
        <ProgressiveImage
          thumbnailSource={{ uri: `https://images.pexels.com/photos/671557/pexels-photo-671557.jpeg?w=50&buster=${Math.random()}` }}
          source={{ uri: `https://images.pexels.com/photos/671557/pexels-photo-671557.jpeg?w=${w.width * 2}&buster=${Math.random()}` }}
          style={{ width: w.width, height: w.width }}
          resizeMode="cover"
        />
      </View>
    );
  }
}