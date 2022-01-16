import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import commonStyles from '../../style/commonStyles';
import MoviesList from '../MoviesList';
import AddMovieModal from '../Modals/AddMovieModal';
import colors from '../../style/colors';
import GenericModal from '../GenericModal';

const MyMovies = () => {
  const [myMovies, setMyMovies] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const addMovieModalControl = {
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
        <TouchableOpacity onPress={addMovieModalControl.open}>
          <Text style={styles.addButton}>Add Movie</Text>
        </TouchableOpacity>
      </View>
      <MoviesList moviesList={myMovies} />
      <GenericModal
        visible={modalVisible}
        onRequestClose={addMovieModalControl.dismiss}>
        <AddMovieModal {...{myMovies, setMyMovies, addMovieModalControl}} />
      </GenericModal>
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
    color: colors.light,
    backgroundColor: colors.green,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontWeight: 'bold',
    borderRadius: 5,
  },
});
