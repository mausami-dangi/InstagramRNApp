/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Dashboard from './src/Components/Dashboard';

AppRegistry.registerComponent(appName, () => App);
console.disableYellowBox = true
