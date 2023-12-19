import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ButtonGradient from './components/buttons/ButtonGradient';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style='auto' />
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>Hello</Text>
          <Text style={styles.subtitle}>Sign in to your account</Text>

          <TextInput style={styles.textInput} placeholder='Email' />
          <TextInput style={styles.textInput} placeholder='Password' />
        </View>
        <ButtonGradient />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },

  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 80,
    color: '#34434D',
    fontWeight: 'bold',
  },

  subtitle: {
    fontSize: 16,
    color: 'gray',
  },

  textInput: {
    padding: 10,
    paddingStart: 30,
    width: '80%',
    height: 40,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
});
