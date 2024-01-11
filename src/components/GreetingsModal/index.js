import {Text, View} from 'react-native';
import Modal from 'react-native-modal';
import React from 'react';
import CheckBox from '../CheckBox';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CommonButton from "../UI/CommonButton";

function GreetingsModal({isVisible, onClose}) {
  const [isPrivacyPolicyChecked, setIsPrivacyPolicyChecked] =
      React.useState(false);
  const navigation = useNavigation();
  const handlePrivacyPolicyPress = () => {
    // navigation.navigate('WebView', { url: 'privacy-policy-url' });
  };

  const handleConfirmPress = async () => {
    await AsyncStorage.setItem('privacyPolicyConfirmed', 'true');
    onClose();
    navigation.navigate('MainMenu');
  };

  return (
      <Modal
          style={{}}
          animationIn="slideInUp"
          animationOut="slideOutDown"
          animationInTiming={600}
          animationOutTiming={300}
          onBackdropPress={onClose}
          onBackButtonPress={onClose}
          isVisible={isVisible}
      >
        <View
            style={{
              flex: 1.4,
              backgroundColor: '#EFFFFF',
              borderRadius: 25,
              borderStyle: 'solid',
              borderWidth: 2,
              borderColor: '#000',
              justifyContent: 'center',
              alignItems: 'center',
            }}
        >
          <Text>Welcome to My Game!</Text>
          <Text>Privacy Policy Confirmation</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CheckBox
                label="Agree to Privacy Policy"
                checked={isPrivacyPolicyChecked}
                onChange={() => setIsPrivacyPolicyChecked(!isPrivacyPolicyChecked)}
            />
            <Text>Confirm Privacy Policy</Text>
          </View>
          <CommonButton
              styles={{marginTop: 10}}
              title="View Privacy Policy"
              onPress={handlePrivacyPolicyPress}
          />
          <CommonButton
              styles={{marginTop: 10}}
              title="Confirm" onPress={handleConfirmPress}/>
        </View>
      </Modal>
  );
}

export default GreetingsModal;
