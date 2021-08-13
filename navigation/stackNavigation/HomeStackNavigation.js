import Home from '../../screens/Home'
import HomeServicesDetail from '../../screens/HomeServicesDetail'
import HomeServicesList from '../../screens/HomeServicesList'
import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

const HomeStackNavigator = createStackNavigator(
  {
    Home_Screen: {
      screen: Home,
    },
    Home_Services_List: {
      screen: HomeServicesList,
    },
    Home_Services_Detail: {
      screen: HomeServicesDetail,
    },
  },
  {
    mode: 'modal',
    defaultNavigationOptions: {
      // headerTransparent: true,
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontFamily: 'open-sans-bold',
        fontWeight: '200',
      },
      headerTintColor: 'white',
    },
  }
)

const HomeStackNavigation = createAppContainer(HomeStackNavigator)

export default HomeStackNavigation
