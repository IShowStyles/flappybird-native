import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
// UI
import CommonButton from '../../components/UI/CommonButton';
import useInitSDK from '../../hooks/useInitSDK';

function MainMenu({navigation}) {
  // const {gcd} = useInitSDK();
  // console.log(gcd);
  return (
      <SafeAreaView
          style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
      >
        <Text style={styles.title}>Main Menu</Text>
        <View style={styles.separator}/>
        <CommonButton
            styles={{marginTop: 20}}
            title='Settings'
            onPress={() => navigation.navigate('Settings')}
        />
        <CommonButton
            styles={{marginTop: 20}}
            title='Play'
            onPress={() => navigation.navigate('Play')}
        />
        <CommonButton
            styles={{marginTop: 20}}
            title='Privacy Policy'
            onPress={() => navigation.navigate('PrivacyPolicy')}
        />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

export default MainMenu;
