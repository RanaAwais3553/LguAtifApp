import Color from '../../colors/Color'
import ContactUs from '../../screens/contactUs/ContactUs'
import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

const ContactUsStackNavigator = createStackNavigator({
  Contact_Us: {
    screen: ContactUs,
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
const ContactUsStackNavigation = createAppContainer(ContactUsStackNavigator)
export default ContactUsStackNavigation
