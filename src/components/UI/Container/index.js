import { useWindowDimensions, View } from 'react-native';
import React from 'react';

const Container = ({ children, marginP }) => {
  const { width } = useWindowDimensions();
  const getContainerStyle = () => {
    return {
      width: width * (marginP / 100),
      marginLeft: 'auto',
      marginRight: 'auto',
    };
  };
  return (
    <View
      style={{
        ...getContainerStyle(),
      }}
    >
      {children}
    </View>
  );
};

export default Container;
