import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from '../Components/Login';
import SignUp from '../Components/SignUp';
import Dashboard from '../Components/Dashboard';

const MainNavigator = createStackNavigator({
    Login: {screen: Login},
    SignUp: {screen: SignUp},
    Dashboard: {screen: Dashboard},
    },
    {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    },


});

const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;
