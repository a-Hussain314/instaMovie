import React, {memo, useCallback, useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import colors from '../style/colors';
import commonStyles from '../style/commonStyles';
import GenericModal from './GenericModal';
import MovieDataModal from './Modals/MovieDataModal';

const MovieCard = ({
  movie = {
    title: '',
    release_date: '',
    poster_path: '',
    overview: '',
    Selected_image_uri: '',
  },
}) => {
  const [image, setImage] = useState({
    uri: movie.poster_path
      ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` // compose the tmdb movie poster uri
      : movie.Selected_image_uri, // the selected image from device
  });
  const [modalVisible, setModalVisible] = useState(false);

  const movieModalControl = {
    open: () => setModalVisible(true),
    dismiss: () => setModalVisible(false),
  };

  // to replace image with fallback image, in case of invalid uri
  const setFallbackImage = useCallback(() => {
    setImage(require('../assets/imageUnavailable.png'));
  }, [setImage]);

  return (
    <>
      <TouchableOpacity
        style={[styles.movieCard, commonStyles.boxShadow]}
        onPress={movieModalControl.open}>
        <Image
          resizeMode="contain"
          source={image}
          style={styles.poster}
          onError={setFallbackImage}
        />
        <View style={styles.data}>
          <Text style={styles.title} numberOfLines={1}>
            {movie.title || 'unavailable title'}
          </Text>
          <Text style={styles.date} numberOfLines={1}>
            Release Date: {movie.release_date || 'unavailable'}
          </Text>
          <Text style={styles.overview} numberOfLines={3}>
            {movie.overview || 'unavailable overview'}
          </Text>
        </View>
      </TouchableOpacity>
      <GenericModal
        visible={modalVisible}
        onRequestClose={movieModalControl.dismiss}>
        <MovieDataModal {...{image, movie}} />
      </GenericModal>
    </>
  );
};

export default memo(MovieCard);

const styles = StyleSheet.create({
  movieCard: {
    height: 100,
    paddingRight: 10,
    margin: 8,
    borderRadius: 10,
    overflow: 'hidden',
    flexDirection: 'row',
    backgroundColor: colors.light,
  },
  poster: {
    width: 90,
    height: 100,
    backgroundColor: colors.lightGrey,
  },
  data: {
    padding: 5,
    flex: 1,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.dark,
  },
  date: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  overview: {},
});
