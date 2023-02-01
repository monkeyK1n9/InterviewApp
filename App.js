import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {app} from './firebase-config'
import { getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {theme} from './src/infrastructure/theme/lightTheme'
import {ThemeProvider} from 'styled-components/native'
import { AppNavigation } from './src/infrastructure/navigation/AppNavigation';
import { Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { useFonts as useOutfit, Outfit_400Regular } from '@expo-google-fonts/outfit';

export default function App() {
  const [outfitLoaded] = useOutfit({Outfit_400Regular})

  if (!outfitLoaded) return null

  const auth = getAuth()

  if (getApps().length < 1) {
    app
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </ThemeProvider>
      <StatusBar translucent={true} color={theme.colors.ui.primary} />
    </>
  );
}
