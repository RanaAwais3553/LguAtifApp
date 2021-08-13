import Color from '../../colors/Color'
import { Platform } from 'react-native'
import TestMonial from '../../screens/testmonial/TestMonial'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

const TestmonialStackNavigator = createStackNavigator({
  Test_monial: {
    screen: TestMonial,
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
const TestmonialStackNavigation = createAppContainer(TestmonialStackNavigator)
export default TestmonialStackNavigation
