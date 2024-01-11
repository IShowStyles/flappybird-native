// PrivacyPolicyScreen.js
import React, {useEffect, useState} from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GreetingsModal from '../../components/GreetingsModal';

function PrivacyPolicyScreen({ navigation }) {

  const [isGreetingsModalVisible, setIsGreetingsModalVisible] = useState(true);

  const closeModal = () => {
    setIsGreetingsModalVisible(false);
  };

  const toggleModal = () => {
    setIsGreetingsModalVisible(!isGreetingsModalVisible);
  };


  useEffect(() => {
    async function checkPrivacyPolicyConfirmation() {
      const hasConfirmed = await AsyncStorage.getItem('privacyPolicyConfirmed');
      if (hasConfirmed) {
        navigation.navigate('MainMenu');
      }
    }
    checkPrivacyPolicyConfirmation();
  }, [navigation]);

  return (
    <View style={{ flex: 1 }}>
      <GreetingsModal
        toggle={toggleModal}
        isVisible={isGreetingsModalVisible}
        onClose={closeModal}
      />
      <WebView
        source={{ uri: 'https://your-privacy-policy-url.com' }}
        onNavigationStateChange={navState => {
          // Check if the user has scrolled to the end of the Privacy Policy
          if (navState.canGoForward === false) {
            return;
          }
        }}
      />
    </View>
  );
}

export default PrivacyPolicyScreen;
