import React, { useContext } from 'react';
import {
  Text,
  Touchable,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import Container from '../../components/UI/Container';
import { ColorThemeContext } from '../../context';

const Colors = [
  {
    name: 'Red',
    hex: '#FF0000',
  },
  {
    name: 'Green',
    hex: '#00FF00',
  },
  {
    name: 'Blue',
    hex: '#0000FF',
  },
  {
    name: 'Yellow',
    hex: '#FFFF00',
  },
  {
    name: 'Cyan',
    hex: '#00FFFF',
  },
  {
    name: 'Dark Blue',
    hex: 'navy',
  },
  {
    name: 'Dark Green',
    hex: 'teal',
  },
  {
    name: 'Dark Red',
    hex: 'crimson',
  },
  {
    name: 'Dark Yellow',
    hex: 'goldenrod',
  },
];

const SettingsScreen = () => {
  const { stringState, updateStringState } = useContext(ColorThemeContext);

  const updateColor = color => {
    updateStringState(color);
  };

  return (
    <View>
      <Container marginP={85}>
        <View
          style={{
            marginBottom: 20,
          }}
        >
          <Text>Settings</Text>
          <Text>Choose Color for the Game | {stringState}</Text>
        </View>
        <View>
          {Colors.map(({ name, hex }, index) => (
            <TouchableOpacity
              underlayColor="transparent"
              key={index}
              onPress={() => updateColor(hex)}
            >
              <View
                style={{
                  flexDirection: 'row',
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: 10,
                }}
              >
                <View
                  style={{
                    borderStyle: 'solid',
                    borderWidth: 1,
                    backgroundColor: hex,
                    width: 25,
                    height: 25,
                    borderRadius: 9999,
                    marginRight: 10,
                  }}
                />
                <Text>{name}</Text>
                {stringState === hex && (
                  <>
                    <Text
                      style={{
                        marginLeft: 8,
                      }}
                    >
                      Current color for game:
                    </Text>
                    <Text
                      style={{
                        marginLeft: 8,
                      }}
                    >
                      {name}
                    </Text>
                  </>
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </Container>
    </View>
  );
};

export default SettingsScreen;
