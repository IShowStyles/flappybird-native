import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CommonButton = ({ title, onPress, styles }) => (
  <View>
    <TouchableOpacity
      onPress={onPress}
      style={[{ ...style.button, ...styles }]}
    >
      <Text style={{ ...style.buttonText }}>{title}</Text>
    </TouchableOpacity>
  </View>
);

const style = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CommonButton;
