import * as WebBrowser from 'expo-web-browser'
import * as React from 'react'
import MapView from 'react-native-maps'
import { StyleSheet, View, Text, Dimensions } from 'react-native'

export default function SearchScreen() {
    return (
        <View>
            <MapView provider={"google"} style={styles.mapStyle}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        ...StyleSheet.absoluteFillObject,
    }
})