import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  LogBox,
  Share,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import React, { useEffect, useState } from 'react'

import Color from '../colors/Color'
import Companies from '../components/allcompanies/Companies'
import HeaderButton from '../components/headerButton/HeaderButton'
import HeaderLogo from '../components/headerLogo/HeaderLogo'
import HomeCategories from '../components/homeScreen/HomeCategories'
import HomeServices from '../components/homeScreen/HomeServices'
import { SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import axios from 'axios'

let { width: screenWidth, height: screenHeight } = Dimensions.get('window')
const Home = (props) => {
  const [proServices, setProServices] = useState([])
  const [bankServices, setBankServices] = useState([])
  let componentMounted = true
  let componentMountedsec = true

  useEffect(() => {
    const fetchPackeges = async () => {
      try {
        const { data } = await axios.get(
          `https://cms-progcc.herokuapp.com/categories/60f1612b7806eca740ece88d`
        )
        if (componentMounted) {
          // (5) is component still mounted?
          setProServices(data)
        }
      } catch (err) {
        console.log(err)
      }
    }
    fetchPackeges()
    return () => {
      // This code runs when component is unmounted
      componentMounted = false // (4) set it to false if we leave the page
    }
  }, [])
  useEffect(() => {
    const fetchPackeges = async () => {
      try {
        const { data } = await axios.get(
          `https://cms-progcc.herokuapp.com/categories/60f161437806eca740ece88e`
        )
        if (componentMountedsec) {
          // (5) is component still mounted?
          setBankServices(data)
        }
      } catch (err) {
        console.log(err)
      }
    }
    fetchPackeges()
    return () => {
      // This code runs when component is unmounted
      componentMountedsec = false // (4) set it to false if we leave the page
    }
  }, [])
  LogBox.ignoreLogs([
    'Animated.event',
    'Your project is accessing',
    'componentWillMount has been renamed, and is not recommended',
    'componentWillReceiveProps has been renamed,',
  ])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            height: screenHeight,
            justifyContent: 'flex-start',
          }}
        >
          <View
            style={{
              width: screenWidth,
              justifyContent: 'flex-start',
              height: screenHeight / 3,
            }}
          >
            <Image
              style={{
                width: screenWidth,
                height: screenHeight / 3,
                resizeMode: 'stretch',
              }}
              source={require('../assets/progccImages/home.jpg')}
            />
          </View>
          <HomeServices
            title='Banking & Finance'
            logo={require('../assets/progccImages/FixedDepositiconb8b9cd9ec4.png')}
            onSelect={() => {
              props.navigation.navigate({
                routeName: 'Home_Services_List',
                params: {
                  title: 'Banking & Finance',
                  detail:
                    'PRO GCC, Banking and finance services in Dubai, UAE providing licensed financial system that operate to receive BANK deposits, grant credits, and provide many other banking services. Our banking financial services are known as business transactions and services provided by Dubai banks to organizations and individuals. Our services also include bank investment and banking services offered to businesses, including loans, credit, profits, stock trading, leveraged finance, financial instrument, and monitoring bank accounts. Our Banking service is safe, and it can be defined as allowing a loan or investment for business financial deposits by individuals and businessmen.',
                  proServices: bankServices.services,
                  serImage: require('../assets/progccImages/Banking-and-Finance.jpg'),
                },
              })
            }}
          />
          <HomeServices
            title='PRO Services'
            logo={require('../assets/progccImages/BusinessAccounticond3dd58780f.png')}
            onSelect={() => {
              props.navigation.navigate({
                routeName: 'Home_Services_List',
                params: {
                  title: 'PRO Services in UAE',
                  detail:
                    'When it comes to delivering PRO Services in UAE, our team of Professionals handhold you throughout your desired services from the beginning to the end. Our consultants here in Dubai offer PRO services to our valuable clients by liaising with the concerned Government Authorities.',
                  serImage: require('../assets/progccImages/pro.jpg'),
                  proServices: proServices.services,
                },
              })
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

Home.navigationOptions = (navData) => {
  return {
    headerTitle: () => <HeaderLogo />,
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Menu'
          iconName='ios-menu'
          onPress={() => {
            navData.navigation.toggleDrawer()
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          iconName='share-social-sharp'
          onPress={() => {
            Share.share({
              title: 'Paradisegoc App',
              message:
                'https://reactnative.dev/docs/share' +
                '\nHy! Happy to see you!',
            })
              .then((res) => console.log(res))
              .catch((error) => console.log(error))
          }}
        />
      </HeaderButtons>
    ),
  }
}
export default Home

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  bar: {
    marginTop: 28,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 18,
    fontFamily: 'open-sans-bold',
  },
  scrollViewContent: {
    marginTop: 0,
  },
})
