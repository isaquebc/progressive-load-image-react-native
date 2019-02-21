import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';


const styles = StyleSheet.create({
  imageOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  container: {
    backgroundColor: '#e1e4e8',
  },
});

class ProgressiveImage extends React.Component {
  
  thumbnailAnimated = new Animated.Value(0);
  imageAnimated = new Animated.Value(0);

  handleThumbnailLoad = () => {
    Animated.timing(this.thumbnailAnimated, {
      toValue: 1,
    }).start();
  }
  onImageLoad = () => {
    Animated.timing(this.imageAnimated, {
      toValue: 1,
    }).start();
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Animated.Image
            {...this.props}
            source={this.props.thumbnailSource}
            style={this.props.style}
            blurRadius={2}
            // onLoad={this.handleThumbnailLoad}
          />
          
        <Animated.Image 
          {...this.props} 
          source={this.props.source}
          style={[styles.imageOverlay, this.props.style]}
          // onLoad={this.onImageLoad}
        />
      </View>
    )
  }
}
export default ProgressiveImage;