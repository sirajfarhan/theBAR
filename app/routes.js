import { createStackNavigator } from 'react-navigation';

import SplashScreen from './pages/SplashScreen'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'

export default createStackNavigator({
  splash: SplashScreen,
  login: LoginPage,
  main: MainPage
});
