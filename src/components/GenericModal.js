import React from 'react';
import {StyleSheet, Modal, View, TouchableOpacity} from 'react-native';
import colors from '../style/colors';

const GenericModal = ({visible, onRequestClose, children}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      {...{visible, onRequestClose}}>
      <View style={styles.modal}>
        <View
          style={styles.overlay}
          onStartShouldSetResponder={() => true}
          onResponderGrant={onRequestClose}>
          {/* transparent overLay */}
        </View>
        {children}
      </View>
    </Modal>
  );
};

export default GenericModal;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: colors.transparent,
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
