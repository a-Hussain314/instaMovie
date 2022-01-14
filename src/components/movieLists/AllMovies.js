import React, {useCallback, useEffect, useRef, useState} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {getMovies} from '../../utils/requester';
import commonStyles from '../../style/commonStyles';
import MoviesList from '../MoviesList';

const AllMovies = () => {
  const [isLoading, setIsloading] = useState(true);
  const [allMovies, setAllMovies] = useState([]);
  const pageNumber = useRef(1);

  const loadMovies = useCallback(() => {
    setIsloading(true);
    getMovies({
      pageNumber: pageNumber.current,
      onSuccess: data => {
        pageNumber.current++;
        setIsloading(false);
        setAllMovies([...allMovies, ...data]);
      },
    });
  }, [setIsloading, allMovies, setAllMovies, pageNumber.current]);

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <View style={styles.container}>
      <View style={[commonStyles.titleBox, commonStyles.boxShadow]}>
        <Text style={commonStyles.title}>All Movies</Text>
      </View>

      {!!allMovies.length && (
        <MoviesList moviesList={allMovies} onEndReached={loadMovies} />
      )}
      {isLoading && <ActivityIndicator size={'large'} style={styles.spinner} />}
    </View>
  );
};

export default AllMovies;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  spinner: {
    marginVertical: 20,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
