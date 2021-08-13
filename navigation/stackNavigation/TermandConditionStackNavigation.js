import Color from '../../colors/Color'
import { Platform } from 'react-native'
import TermandCondition from '../../screens/termandCondition/TermandCondition'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

const TermandConditionStackNavigator = createStackNavigator({
  Termand_Condition: {
    screen: TermandCondition,
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
const TermandConditionStackNavigation = createAppContainer(
  TermandConditionStackNavigator
)
export default TermandConditionStackNavigation
