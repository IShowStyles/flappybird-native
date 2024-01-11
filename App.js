import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
//screens
import MainMenu from './src/screens/MainMenu';
import SettingsScreen from './src/screens/Settings';
import PlayScreen from './src/screens/Play';
import PrivacyPolicyScreen from './src/screens/PrivacyPolicy';
import WebViewScreen from './src/components/WebViewScreen';
//libs
import { ColorThemeProvider } from './src/context';

const Stack = createStackNavigator();

function App() {
  const [hasConfirmed, setHasConfirmed] = React.useState(true);
  return (
      <ColorThemeProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator
                initialRouteName={hasConfirmed ? 'MainMenu' : 'PrivacyPolicy'}
            >
              <Stack.Screen name="MainMenu" component={MainMenu} />
              <Stack.Screen name="Settings" component={SettingsScreen} />
              <Stack.Screen name="Play" component={PlayScreen} />
              <Stack.Screen
                  name="PrivacyPolicy"
                  component={PrivacyPolicyScreen}
              />
              <Stack.Screen name="WebView" component={WebViewScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </ColorThemeProvider>
  );
}

export default App;
