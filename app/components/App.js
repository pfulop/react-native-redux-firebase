//@flow

import { TabNavigator } from 'react-navigation';

import TheCall from './TheCall';
import Register from './Register';
import Add from './Add';

const App = TabNavigator({
  Home: {
    screen: TheCall,
  },
  Register: {
    screen: Register,
  },
  Add: {
    screen: Add,
  },
  }, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

export default App;
