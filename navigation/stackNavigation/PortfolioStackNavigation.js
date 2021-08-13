import { Platform } from 'react-native'
import Portfolio from './../../screens/portfolio/Portfolio'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

const PortfolioStackNavigator = createStackNavigator({
  Portfolio: {
    screen: Portfolio,
    navigationOptions: {
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? '#fff' : '#fff',
      },
      headerTitleStyle: {
        fontFamily: 'open-sans-bold',
        fontWeight: '200',
      },
      headerTintColor: 'white',
    },
  },
})
const PortfolioStackNavigation = createAppContainer(PortfolioStackNavigator)
export default PortfolioStackNavigation
