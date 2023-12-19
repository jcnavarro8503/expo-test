import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ButtonGradient from './components/buttons/ButtonGradient';

const App = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleGradientButtonPress = () => {
    console.log('handleGradientButtonPressed');
    console.log(email, password);
  };

  return (
    <SafeAreaProvider>
      <StatusBar style='auto' />
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>Hello</Text>
          <Text style={styles.subtitle}>Sign in to your account</Text>

          <TextInput
            style={styles.textInput}
            placeholder='Email'
            onChange={setEmail}
            value={email}
            autoCapitalize='none'
            autoCorrect={false}
            autoComplete='off'
          />
          <TextInput
            style={styles.textInput}
            placeholder='Password'
            onChange={setPassword}
            value={password}
            secureTextEntry
          />
        </View>
        <ButtonGradient onPress={handleGradientButtonPress} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;

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
