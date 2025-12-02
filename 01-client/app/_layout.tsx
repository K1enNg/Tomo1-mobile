import { Slot } from "expo-router";
import { StyleSheet, View } from "react-native"
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from "expo-font";
import React ,{ useEffect } from 'react';
import { Stack } from "expo-router/stack";
import { SessionProvider } from "./information/SessionContext";


export default function RootLayout() {
  SplashScreen.preventAutoHideAsync();

  const [loaded, error] = useFonts({
      'Nunito-Light': require('../assets/fonts/Nunito/static/Nunito-Light.ttf'),
      'Nunito-SemiBold': require('../assets/fonts/Nunito/static/Nunito-SemiBold.ttf'),
      'Nunito-Bold': require('../assets/fonts/Nunito/static/Nunito-Bold.ttf')
    });

  useEffect(() => {
      if (loaded || error) {
        SplashScreen.hideAsync();
      }
    }, [loaded, error]);
  
    if (!loaded && !error) {
      return null;
    }

  return (
    <SessionProvider>
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#CDEFF8" }, 
      }}
    />
    </SessionProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CDEFF8",
  },
});

