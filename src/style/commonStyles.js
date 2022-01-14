import {StyleSheet} from 'react-native';
import colors from './colors';

const commonStyles = StyleSheet.create({
  boxShadow: {
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 2.0,
    elevation: 4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  inputFeild: {
    marginBottom: 5,
    borderWidth: 1,
    borderColor: colors.darkgrey,
    padding: 5,
    borderRadius: 5,
  },
  titleBox: {
    padding: 10,
    backgroundColor: colors.darkgrey,
  },
  title: {
    fontSize: 24,
    color: colors.light,
  },
});

export default commonStyles;
