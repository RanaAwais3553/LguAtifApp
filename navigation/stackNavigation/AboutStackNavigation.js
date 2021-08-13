import About from '../../screens/about/About'
import Color from '../../colors/Color'
import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

const AboutUsStackNavigation = createStackNavigator({
  AboutUs: {
    screen: About,
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
const AboutStackNavigation = createAppContainer(AboutUsStackNavigation)
export default AboutStackNavigation
