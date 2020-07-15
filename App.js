import React from 'react';
import WelcomeScreen from './screens/WelcomeScreen';
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import  AppDrawerNavigator  from './components/AppDrawerNavigator';


export default function App() {
  return (
   <AppContainer
   />
  );
}


const switchNavigator = createSwitchNavigator({
  WelcomeScreen: {screen: WelcomeScreen},
  Drawer:{screen: AppDrawerNavigator}
})

const AppContainer =  createAppContainer(switchNavigator); 