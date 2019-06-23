/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './src/App';

// 画像
// import Bananas from './src/Bananas'

// props
// import LotsOfGreeting from './src/Greeting'

// state
// import BlinkApp from './src/Blink'

// stylesheet
// import LotsOfStyles from './src/Styles'

// Height and Width FixedDimensionsBasic
import FixedDimensionsBasics from './src/FixedDimensionsBasics'

// Height and Width FlexDimensionsBasics (next)
// import FlexDimensionsBasics from './src/FlexDimensionsBasics'

// Justify Content
// import JustifyContentBasics from './src/JustifyContentBasics'

// AlignItemsBasics
// import AlignItemsBasics from './src/AlignItemsBasics'

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => FixedDimensionsBasics);
