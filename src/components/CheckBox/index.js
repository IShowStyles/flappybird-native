import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Checkbox = ({ label, checked, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handlePress = () => {
    setIsChecked(!isChecked);
    onChange && onChange(!isChecked);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Ionicons
          name={isChecked ? 'checkbox-outline' : 'square-outline'}
          size={24}
          color={isChecked ? '#007AFF' : '#8E8E93'}
        />
        <Text style={{ marginLeft: 8 }}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Checkbox;
