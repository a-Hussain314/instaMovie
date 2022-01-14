import React, {memo, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-date-picker';
import commonStyles from '../../style/commonStyles';

const DateInput = ({date, setDate}) => {
  const [dateModalVisible, setDateModalVisible] = useState(false);

  const dateModelControl = {
    open: () => setDateModalVisible(true),
    dismiss: () => setDateModalVisible(false),
  };

  const onDateChange = date => {
    dateModelControl.dismiss();
    setDate(date.toISOString().slice(0, 10)); //"YYYY-MM-DD"
  };
  return (
    <>
      <TouchableOpacity onPress={dateModelControl.open}>
        <Text style={[styles.input, commonStyles.inputFeild]}>{date}</Text>
      </TouchableOpacity>
      <DatePicker
        modal
        open={dateModalVisible}
        date={new Date(date)}
        mode="date"
        onConfirm={onDateChange}
        onCancel={dateModelControl.dismiss}
      />
    </>
  );
};

export default memo(DateInput);

const styles = StyleSheet.create({
  input: {
    paddingVertical: 10,
  },
});
