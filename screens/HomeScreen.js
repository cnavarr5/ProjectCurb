import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, View, ScrollView, Animated } from 'react-native';
import { Button, Appbar } from 'react-native-paper'
import getVendors from '../constants/Firebase'

import VendorTile from '../components/Vendor/VendorTile'

export default function HomeScreen({ navigation }) {

  let array = [
    {key: 0, name: 'Great Store Lake', image: 'https://i.picsum.photos/id/0/5616/3744.jpg', desc: 'The Greatest Stored Lake'},
    {key: 1, name: 'Mild Topic', image: 'https://picsum.photos/seed/picsum/200/300', desc: 'For a delicate pallet'},
    {key: 2, name: 'Barns and Doorbells', image: 'https://i.picsum.photos/id/1004/5616/3744.jpg', desc: 'All the doorbells you need'},
    {key: 3, name: 'Alchol Store', image: 'https://i.picsum.photos/id/1003/1181/1772.jpg', desc: 'Buy Alcholics, for Alcoholics'},
    {key: 4, name: 'A Cool store', image: 'https://i.picsum.photos/id/1006/3000/2000.jpg', desc: 'Nothing more, nothing less'}
  ]

  return (
      <ScrollView contentContainerStyle={{ alignItems: 'flex-start' }}>
        <View style={styles.container} >
            { array.map( (data) => {
              return (
                <VendorTile key={data.key} props={{ name: data.name, image: data.image, description: data.desc, page: data, navigation: navigation }} />
              )
            }) }
        </View>
      </ScrollView>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
  },
});
