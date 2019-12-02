import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeIcon from 'react-native-vector-icons/Entypo'
import SearchIcon from 'react-native-vector-icons/AntDesign'
import PlusIcon from 'react-native-vector-icons/AntDesign'
import HeartIcon from 'react-native-vector-icons/AntDesign'
import ProfileIcon from 'react-native-vector-icons/Feather'
import InstaHomeScreen from '../Components/TabScreens/InstaHomeScreen'
import InstaLoveScreen from '../Components/TabScreens/InstaLoveScreen'
import InstaProfileScreen from '../Components/TabScreens/InstaProfileScreen'
import InstaSearchScreen from '../Components/TabScreens/InstaSearchScreen'
import InstaUploadItemsScreen from '../Components/TabScreens/InstaUploadItemsScreen'
import COLORS from '../Constant/Colours';

const HomeTab = createStackNavigator(
    {
        Home: InstaHomeScreen,
    },
    {
        headerMode: 'none',

    }
);

const LoveTab = createStackNavigator(
    {
        Home: InstaLoveScreen,
    },
    {
        headerMode: 'none',
    }
);

const ProfileTab = createStackNavigator(
    {
        Home: InstaProfileScreen,
    },
    {
        headerMode: 'none',
    }
);

const SearchTab = createStackNavigator(
    {
        Home: InstaSearchScreen,
    },
    {
        headerMode: 'none',
    }
);

const UploadTab = createStackNavigator(
    {
        Search: InstaUploadItemsScreen ,
    },
    {
        headerMode: 'none',
    }
);

const TabNavigation = createBottomTabNavigator(
    {
        // Home: HomeTab,
        Search: SearchTab,
        Home: HomeTab,
        Upload: UploadTab,
        Love: LoveTab,
        Profile: ProfileTab
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({tintColor}) => {
                const { routeName } = navigation.state;
                if (routeName === 'Home') {
                    return (
                        <HomeIcon name="home" size={25} color={tintColor} />
                    );
                } else if (routeName === 'Search') {
                    return (
                        <SearchIcon name="search1" size={25} color={tintColor} />
                    );
                } else if (routeName === 'Upload') {
                    return (
                        <PlusIcon name="plussquareo" size={25} color={tintColor} />
                    );
                } else if (routeName === 'Love') {
                    return (
                        <HeartIcon name="hearto" size={25} color={tintColor} />
                    );
                } else if (routeName === 'Profile') {
                    return (
                        <ProfileIcon name="user" size={25} color={tintColor} />
                    );
                }
            },
        }),
        tabBarOptions: { showLabel: false, activeTintColor:'darkblack',}
});

export default createAppContainer(TabNavigation);
