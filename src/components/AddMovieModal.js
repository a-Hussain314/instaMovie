import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Alert,
} from 'react-native';
import TitleTextInput from './formFeilds/TitleTextInput';
import OverviewTextInput from './formFeilds/OverviewTextInput';
import DateInput from './formFeilds/DateInput';
import ImageInput from './formFeilds/ImageInput';
import colors from '../style/colors';

const AddMovieModal = ({
  myMovies,
  setMyMovies,
  modalVisible,
  AddMovieModalControl,
}) => {
  const [image, setImage] = useState(require('../assets/selectImage.webp'));
  const [title, setTitle] = useState('');
  const [overview, setOverview] = useState('');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10)); // initila date : today's date "YYYY-MM-DD"

  const validateAddedMovie = () => {
    if (!image.uri) {
      Alert.alert('missing data', 'Movie Poster is required');
      return false;
    }

    if (!title) {
      Alert.alert('missing data', 'Movie Title feild is required');
      return false;
    }

    if (!overview) {
      Alert.alert('missing data', 'Movie Overview feild is required');
      return false;
    }

    return true;
  };

  const addMovie = () => {
    if (validateAddedMovie()) {
      const newMovie = {
        title,
        release_date: date,
        Selected_image_uri: image.uri,
        overview,
      };
      setMyMovies([newMovie, ...myMovies]);
      AddMovieModalControl.dismiss();
      // after add new movie, clear form data.
      setImage(require('../assets/selectImage.webp'));
      setTitle('');
      setOverview('');
      setDate(new Date().toISOString().slice(0, 10)); // initila date : today's date "YYYY-MM-DD"
    }
  };

  const ActionButtons = () => (
    <View style={styles.buttonsWrapper}>
      <TouchableOpacity style={styles.button} onPress={addMovie}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={AddMovieModalControl.dismiss}>
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={AddMovieModalControl.dismiss}>
      <View style={styles.modal}>
        <View style={styles.modalForm}>
          <ImageInput {...{image, setImage}} />
          <TitleTextInput {...{title, setTitle}} />
          <OverviewTextInput {...{overview, setOverview}} />
          <DateInput {...{date, setDate}} />
          <ActionButtons />
        </View>
      </View>
    </Modal>
  );
};

export default AddMovieModal;

const styles = StyleSheet.create({
  modal: {
    backgroundColor: colors.transparent,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalForm: {
    width: '85%',
    backgroundColor: colors.light,
    padding: 10,
    borderRadius: 5,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  addButtonText: {
    color: colors.green,
    fontWeight: 'bold',
  },
  cancelButtonText: {
    color: colors.red,
    fontWeight: 'bold',
  },
});
