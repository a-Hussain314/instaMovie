import React, {memo} from 'react';
import {Text, FlatList, StyleSheet} from 'react-native';
import MovieCard from './MovieCard';

const MoviesList = ({moviesList = [], onEndReached = () => {}}) => {
  return (
    <FlatList
      data={moviesList}
      renderItem={({item}) => <MovieCard movie={item} />}
      keyExtractor={(item, index) => `${item.id}-${index}`}
      onEndReached={onEndReached}
      ListEmptyComponent={<Text style={styles.noData}>no data available</Text>}
    />
  );
};

export default memo(MoviesList);

const styles = StyleSheet.create({
  noData: {
    textAlign: 'center',
    marginVertical: 20,
  },
});
