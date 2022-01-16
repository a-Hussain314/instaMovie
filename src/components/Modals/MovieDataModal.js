import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import colors from '../../style/colors';

const MovieDataModal = ({image, movie}) => {
  return (
    <View style={styles.modal}>
      <ScrollView style={styles.scrollView}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image resizeMode="contain" source={image} style={styles.poster} />
        </View>
        <View style={styles.data}>
          <Text style={styles.title} numberOfLines={1}>
            {movie.title || 'unavailable title'}
          </Text>
          <Text style={styles.date} numberOfLines={1}>
            Release Date: {movie.release_date || 'unavailable'}
          </Text>
          <Text style={styles.overview}>
            {movie.overview || 'unavailable overview'}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default MovieDataModal;

const styles = StyleSheet.create({
  modal: {
    flex: 0.85,
    width: '85%',
    backgroundColor: colors.light,
    paddingVertical: 10,
    borderRadius: 10,
  },
  scrollView: {
    paddingHorizontal: 10,
  },
  modalData: {},
  poster: {
    width: 160,
    height: 240,
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
