//@flow

import { TabNavigator } from 'react-navigation';

import TheCall from './TheCall';
import Register from './Register';

const App = TabNavigator({
  Home: {
    screen: TheCall,
  },
  Register: {
    screen: Register,
  },
  }, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

export default App;
