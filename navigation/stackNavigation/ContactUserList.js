import ContactUserList from '../../screens/contactUs/ContactUserList'
import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

const ContactUserListStackNavigator = createStackNavigator({
  Contact_User_List: {
    screen: ContactUserList,
    navigationOptions: {
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? '#fff' : '#fff',
      },
      headerTitleStyle: {
        fontFamily: 'open-sans-bold',
        fontWeight: '200',
      },
      headerTintColor: '#121212',
    },
  },
})
const ContactUserListStackNavigation = createAppContainer(
  ContactUserListStackNavigator
)
export default ContactUserListStackNavigation
