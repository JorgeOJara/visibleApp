import * as React from 'react';
import { View, Text, ImageBackground, StyleSheet, Pressable, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import backgroundImage from './annie-spratt-wuc-KEIBrdE-unsplash.png';
import {useForm, useController} from 'react-hook-form';

// Welcome Screen
function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.text}>{'Log In'}</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.text}>{'Sign Up'}</Text>
            </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

// Login Screen
function LoginScreen() {
  return (
    <View style={styles.center}>
      <Text>Login Screen</Text>
    </View>
  );
}

// Sign In Screen
function SignUpScreen() {
  const{signUp, handleSubmit} = useForm();
  //const onSubmit = (data) => alert(JSON.stringify(data));
  const Input = (name, signUp) =>{
    const {field} = useController({
      signUp,
      defaultValue: '',
      name,
    })
    return(
    <TextInput
      value={field.value}
      onChangeText={field.onChange}
      style={styles.text}
    />
    );
  };

  return (
    <View style={styles.center}>
      <Text style={styles.text}>Sign Up Screen</Text>
      <Text style={styles.text}>First Name</Text>
      <Input name="firstName" signUp={signUp}/>
      <Text style={styles.text}>Last Name Name</Text>
      <Input name="firstName" signUp={signUp}/>
    </View>

  );
}

// Stack Navigator
const Stack = createStackNavigator();

// App Component
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '30%', 
    backgroundColor: 'rgba(255, 255, 255, 0.90)',
    borderRadius: 10,
    paddingVertical: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

  button: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#1C2833',
    width: '70%',
  }
});

export default App;
