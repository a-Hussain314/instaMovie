import React, {useState} from 'react';
import {SafeAreaView, FlatList, StyleSheet, Text, View} from 'react-native';
import AllMovies from './src/components/movieLists/AllMovies';
import MyMovies from './src/components/movieLists/MyMovies';
import colors from './src/style/colors';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AllMovies />
      <MyMovies />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.offWhite,
  },
});
