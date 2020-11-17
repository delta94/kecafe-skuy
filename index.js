/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

LogBox.ignoreAllLogs(true);

if (Platform.OS === 'android') {
  require('intl');
  require('intl/locale-data/jsonp/id-ID');
}

AppRegistry.registerComponent(appName, () => App);
