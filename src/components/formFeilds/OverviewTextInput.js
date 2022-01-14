import React, {memo} from 'react';
import {TextInput} from 'react-native';
import commonStyles from '../../style/commonStyles';

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
    />
  );
});

export default memo(OverviewTextInput);
