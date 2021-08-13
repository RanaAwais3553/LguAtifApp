import Color from '../../colors/Color'
import Login from '../../screens/authScreen/Login'
import { Platform } from 'react-native'
import SignUp from '../../screens/authScreen/Signup'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

const AuthStackNavigation = createStackNavigator(
  {
    Login_Screen: {
      screen: Login,
    },
    Sign_Up: {
      screen: SignUp,
    },
  },
  {
    defaultNavigationOptions: {
      headerTransparent: true,
      //   headerTitleAlign: 'center',
      //   headerStyle: {
      //     backgroundColor:
      //       Platform.OS === 'android' ? Color.primaryColour : Color.accentColour,
      //   },
      //   headerTitleStyle: {
      //     fontFamily: 'open-sans-bold',
      //     fontWeight: '200',
      //   },
      //   headerTintColor: 'white',
    },
  }
)
const AuthScreenStackNavigation = createAppContainer(AuthStackNavigation)
export default AuthScreenStackNavigation
