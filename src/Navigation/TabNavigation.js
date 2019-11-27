import React, {Component} from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import InstaHomeScreen from '../Components/TabScreens/InstaHomeScreen'
import InstaLoveScreen from '../Components/TabScreens/InstaLoveScreen'
import InstaProfileScreen from '../Components/TabScreens/InstaProfileScreen'
import InstaSearchScreen from '../Components/TabScreens/InstaSearchScreen'
import InstaUploadItemsScreen from '../Components/TabScreens/InstaUploadItemsScreen'

const HomeTab = createStackNavigator(
    {
        Home: InstaHomeScreen,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#0091EA',
            },
           headerTintColor: '#fff',
            title: 'Home Tab',

        },
    }
);

const LoveTab = createStackNavigator(
    {
        Home: InstaLoveScreen,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#0091EA',
            },
            headerTintColor: '#fff',
            title: 'Love Tab',

        },
    }
);

const ProfileTab = createStackNavigator(
    {
        Home: InstaProfileScreen,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#0091EA',
            },
            headerTintColor: '#fff',
            title: 'Profile Tab',

        },
    }
);
const SearchTab = createStackNavigator(
    {
        Home: InstaSearchScreen,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#0091EA',
            },
            headerTintColor: '#fff',
            title: 'Search Tab',

        },
    }
);

const UploadTab = createStackNavigator(
    {
        Search: InstaUploadItemsScreen ,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#0091EA',
            },
            headerTintColor: '#FFFFFF',
            title: 'Upload Tab',

        },
    }
);

const TabNavigation = createBottomTabNavigator(
    {
    Home: HomeTab,
    Search: SearchTab,
    Upload: UploadTab,
    Love: LoveTab,
    Profile: ProfileTab
},
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                if (routeName === 'Home') {
                    return (
                        <Image
                            source={ require('../Assets/home_icon.png') }
                            style={{ width: 20, height: 20, }} />
                    );
                } else if (routeName === 'Search') {
                    return (
                        <Image
                            source={ require('../Assets/search_icon.png') }
                            style={{ width: 20, height: 20, }} />
                    );
                } else if (routeName === 'Upload') {
                    return (
                        <Image
                            source={ require('../Assets/upload_icon.png') }
                            style={{ width: 20, height: 20, }} />
                    );
                } else if (routeName === 'Love') {
                    return (
                        <Image
                            source={ require('../Assets/heart_icon.png') }
                            style={{ width: 20, height: 20, }} />
                    );
                } else if (routeName === 'Profile') {
                    return (
                        <Image
                            source={ require('../Assets/profile_icon.png') }
                            style={{ width: 20, height: 20, }} />
                    );
                }
            },
        }),
        tabBarOptions: {
            activeTintColor: '#FF6F00',
            inactiveTintColor: '#263238',
        },
    });

export default createAppContainer(TabNavigation);
