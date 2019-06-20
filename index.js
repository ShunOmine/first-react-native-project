/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
// import Bananas from './Bananas'
// import LotsOfGreeting from './Greeting'
import BlinkApp from './Blink'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => BlinkApp);
