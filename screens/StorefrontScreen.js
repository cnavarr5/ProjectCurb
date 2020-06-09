import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import TabBarIcon from '../components/TabBarIcon'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Surface, Headline, Subheading } from 'react-native-paper'
import AboutScreen from './AboutScreen'
import SearchScreen from './SearchScreen'
import InventoryScreen from './InventoryScreen'

const StoreNavigation = createBottomTabNavigator();
export default function StoreFrontScreen({ navigation, route }){
    const [name, setName] = React.useState('unset name')
    const [src, setSrc] = React.useState('not set')
    const [desc, setDesc] = React.useState('unset description')

    React.useEffect(() => {
        if (route.params?.pageInfo){
            let props = route.params?.pageInfo
            setName(props.name)
            setSrc(props.image)
            setDesc(props.desc)
        }
    }, [route.params?.pageInfo])
    return (
        <View>
            {(src != 'not set' ? <Image source={{ uri: src, width:"100%", height: '50%' }} /> : <Image source={ require('../assets/images/vendor0.jpg')} />)}
            <Surface style={styles.Surface}>
                <Headline>{name}</Headline>
                <Subheading>{desc}</Subheading>
            </Surface>
            <StoreNavigation.Navigator initialRouteName={name}>
                    <StoreNavigation.Screen
                        name='Inventory'
                        component={InventoryScreen}
                        options={{
                            title: 'About',
                            tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-cash" />,
                        }}
                    />
                    <StoreNavigation.Screen
                        name='Location'
                        component={SearchScreen}
                        options={{
                            title: 'Location',
                            tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-map" />,
                        }}
                    />
                    <StoreNavigation.Screen
                        name='About'
                        component={AboutScreen}
                        options={{
                            title: 'About',
                            tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-finger-print" />,
                        }}
                    />
                </StoreNavigation.Navigator>
        </View>
    )
}

const styles = StyleSheet.create({
    Surface: {
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
    }
})