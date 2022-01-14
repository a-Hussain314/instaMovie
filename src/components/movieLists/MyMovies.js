import React, {useState} from 'react';
import {StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';
import commonStyles from '../../style/commonStyles';
import MoviesList from '../MoviesList';
import AddMovieModal from '../AddMovieModal';
import colors from '../../style/colors';

const MyMovies = () => {
  const [myMovies, setMyMovies] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const AddMovieModalControl = {
    open: () => setModalVisible(true),
    dismiss: () => setModalVisible(false),
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          commonStyles.titleBox,
          commonStyles.boxShadow,
          styles.titleBox,
        ]}>
        <Text style={commonStyles.title}>My Movies</Text>
        <TouchableOpacity onPress={AddMovieModalControl.open}>
          <Text style={styles.addButton}>Add Movie</Text>
        </TouchableOpacity>
      </View>
      <MoviesList moviesList={myMovies} />
      <AddMovieModal
        {...{myMovies, setMyMovies, modalVisible, AddMovieModalControl}}
      />
    </View>
  );
};

export default MyMovies;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addButton: {
    color: '#fff',
    backgroundColor: colors.green,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontWeight: 'bold',
    borderRadius: 5,
  },
});
