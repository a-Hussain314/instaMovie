import React, {memo} from 'react';
import {TextInput} from 'react-native';
import commonStyles from '../../style/commonStyles';

const TitleTextInput = ({title, setTitle}) => {
  return (
    <TextInput
      style={commonStyles.inputFeild}
      onChangeText={setTitle}
      value={title}
      placeholder="Movie Title"
    />
  );
};

export default memo(TitleTextInput);
