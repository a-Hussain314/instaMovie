import React, {memo} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import {StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import colors from '../../style/colors';

const ImageInput = ({image, setImage}) => {
  const selectImageFromGallery = () => {
    launchImageLibrary({}, data => {
      if (data?.assets?.[0]?.uri) {
        setImage({uri: data.assets[0].uri});
      }
    });
  };

  return (
    <TouchableOpacity
      style={styles.imageInput}
      onPress={selectImageFromGallery}>
      <Image style={styles.image} resizeMode="contain" source={image} />
      <Text>Select Movie Poster</Text>
    </TouchableOpacity>
  );
};

export default memo(ImageInput);

const styles = StyleSheet.create({
  imageInput: {
    width: '50%',
    alignSelf: 'center',
    marginBottom: 5,
    borderWidth: 1,
    borderColor: colors.darkgrey,
    padding: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
  image: {
    height: 100,
    width: 100,
  },
});
