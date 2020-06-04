import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import LoginNavigation from '../navigation/LoginNavigation'
import initializeDb from '../constants/Firebase'
import * as firebase from 'firebase'
import * as GoogleSignIn from 'expo-google-sign-in'

export default function LinksScreen() {
  const [username, changeUsername] = React.useState('Username')
  const [password, changePassword] = React.useState('Password')
  const [user, setUser] = React.useState(null)

  _syncUserWithStateAsync = async () => {
    const user = await GoogleSignIn.signInSilentlyAsync()
    setUser(user)
  }
  
  signOutAsync = async () => {
    await GoogleSignIn.signOutAsync();
    setUser({ user: null })
  }
  
  signInAsync = async () => {
    try {
      await GoogleSignIn.askForPlayServicesAsync()
      const { type, user } = await GoogleSignIn.signInAsync()
      if (type === 'success'){
        this._syncUserWithStateAsync()
      }
    } catch ({ message }) {
      alert('login error: ' + message)
    }
  }
  
  const onPress = () => {
    if(user){
      this.signOutAsync()
    } else {
      this.signInAsync()
    }
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.loginForm}>
        <View style={styles.formGroup}>
        <Image
        style={styles.loginLogo}
        source={require('../assets/images/cart.png')}
      />
          <Text style={styles.formLabel}>
            Username
          </Text>
          <TextInput
            style={styles.formField}
            clearButtonMode={'while-editing'}
            onChangeText={text => changeUsername(text)}
            placeholder={username}
            value={username}
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>
            Password
          </Text>
          <TextInput
          style={styles.formField}
          secureTextEntry={true}
          clearButtonMode={'while-editing'}
          textContentType={'password'}
          onChangeText={text => changePassword(text)}
          placeholder={password}
          value={password}
          />
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>
            Sign in
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={onPress}>
          <Image
            style={styles.authLogo}
            source={require("../assets/images/google-logo.jpg")}
          />
          <Text style={styles.loginButtonText}>
            Sign in with Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton}>
        <Image
            style={styles.authLogo}
            source={require("../assets/images/facebook-logo.png")}
          />
          <Text style={styles.loginButtonText}>
            Sign in with Facebook
          </Text>
        </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

function authenticated(){
  firebase.auth().onAuthStateChanged(user => {
    if(user){
      console.log('Signed In')
    }
    console.log('Not Signed in')
  })
}

const styles = StyleSheet.create({
  loginLogo: {
    width: 200,
    height: 200,
    borderRadius: 150,
    marginTop: 20,
    marginBottom: 20
  },
  loginForm: {
    //borderWidth: 1,
    //borderColor: "salmon"
  },
  formGroup: {
    flexDirection: "column",
    alignItems: "center"
  },
  formLabel: {
    fontWeight: "bold",
    fontSize: 24
  },
  formField: {
    borderWidth: 1,
    width: 200,
    paddingLeft: 10,
  },
  authLogo: {
    height: 20,
    width: 20,
    borderRadius: 100,
    marginRight: 10
  },
  loginButton: {
    flexDirection: "row",
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    width: 200,
    borderRadius: 10,
    backgroundColor: "#87CEFA"
  },
  loginButtonText: {
    color: "#FFFFFF"
  },
});
