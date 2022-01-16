import React, {useCallback, useEffect, useRef, useState} from 'react';
import {ActivityIndicator, Alert, StyleSheet, Text, View} from 'react-native';
import {getMovies} from '../../utils/requester';
import NetInfo from '@react-native-community/netinfo';
import commonStyles from '../../style/commonStyles';
import MoviesList from '../MoviesList';

const AllMovies = () => {
  const [isLoading, setIsloading] = useState(true);
  const [allMovies, setAllMovies] = useState([]);
  const pageNumber = useRef(1);

  useEffect(() => {
    // on app mount, attach network connection listener
    NetInfo.addEventListener(network => {
      // in case of conection restored and first page not loaded yet
      if (network.isConnected && !AllMovies.length) {
        loadMovies();
      } else {
        alertNoNetworkConnection();
      }
    });
  }, []);

  const loadMovies = useCallback(() => {
    // check internet connection first
    NetInfo.fetch().then(network => {
      if (network.isConnected) {
        // in case of network connected.
        if (!isLoading) {
          setIsloading(true); // show the loading spinner
        }
        // fetch the first/next page movies
        getMovies({
          pageNumber: pageNumber.current,
          onSuccess: data => {
            pageNumber.current++; // update page number value to fetch next page in next function call
            setIsloading(false); // hide the loading spinner
            setAllMovies([...allMovies, ...data]); // update "allmovies" list/state to add the newely fetched movies
          },
        });
      } else {
        // in case of network disconnected.
        alertNoNetworkConnection();
      }
    });
  }, [setIsloading, allMovies, setAllMovies, pageNumber.current]);

  const alertNoNetworkConnection = useCallback(() => {
    setIsloading(false);
    Alert.alert(
      'No internet connection',
      'Unable to load movies, plaese check your internet connection and try again.',
    );
  }, [setIsloading]);

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
