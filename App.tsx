import { useEffect } from 'react';
import { useFonts } from 'expo-font'
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import { Rajdhani_700Bold, Rajdhani_500Medium } from '@expo-google-fonts/rajdhani'
import * as SplashScreen from 'expo-splash-screen';

import { SignIn } from './src/screens/sign-in';
import { StatusBar } from 'react-native';
import { Home } from './src/screens/home';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, error] = useFonts({
    Inter_400Regular, 
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  })

  useEffect(() => {
    if (fontsLoaded || error) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <Home />
    </>
  )
}
