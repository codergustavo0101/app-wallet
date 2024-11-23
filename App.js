import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes';
import { useFonts, Poppins_500Medium, Poppins_400Regular,Poppins_100Thin,Poppins_300Light, Poppins_700Bold, Poppins_600SemiBold,Poppins_500Medium_Italic } from '@expo-google-fonts/poppins';

export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_600SemiBold,
    Poppins_500Medium_Italic
  });


  return (
      <>
      <StatusBar style="light" />
      <Routes/>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
