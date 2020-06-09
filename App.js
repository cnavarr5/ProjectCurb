import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, Image } from 'react-native';
import { Provider as PaperProvider, Appbar } from 'react-native-paper'
import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';

const Stack = createStackNavigator();

export default function App(props) {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <PaperProvider>
          {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
          <NavigationContainer linking={LinkingConfiguration}>
            <Stack.Navigator>
              <Stack.Screen
                options={{
                  headerTitle: props => {
                    <TestHeader />
                  }
                }}
                name="Root" component={BottomTabNavigator} />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </View>
    );
  }
}

function TestHeader() {
  return (
    <Image 
      style={{ width: 50, height: 50}}
      source={require('./assets/images/google-logo.jpg')}
    />
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
