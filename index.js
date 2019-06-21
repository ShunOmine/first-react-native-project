/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';

// 画像
// import Bananas from './Bananas'

// props
// import LotsOfGreeting from './Greeting'

// state
// import BlinkApp from './Blink'

// stylesheet
import LotsOfStyles from './Styles'

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => LotsOfStyles);
