import React, {memo} from 'react';
import {TextInput} from 'react-native';
import commonStyles from '../../style/commonStyles';
import colors from "../../style/colors"

const OverviewTextInput = memo(({overview, setOverview}) => {
  return (
    <TextInput
      style={commonStyles.inputFeild}
      onChangeText={setOverview}
      value={overview}
      placeholder="Movie Overview"
      multiline={true}
      numberOfLines={4}
      textAlignVertical="top"
      placeholderTextColor={colors.darkgrey}
    />
  );
});

export default memo(OverviewTextInput);
