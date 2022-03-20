import React, {memo} from 'react';
import {TextInput} from 'react-native';
import commonStyles from '../../style/commonStyles';
import colors from "../../style/colors"

const TitleTextInput = ({title, setTitle}) => {
  return (
    <TextInput
      style={commonStyles.inputFeild}
      onChangeText={setTitle}
      value={title}
      placeholder="Movie Title"
      placeholderTextColor={colors.darkgrey}
    />
  );
};

export default memo(TitleTextInput);
