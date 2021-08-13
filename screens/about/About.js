import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import React, { useState } from 'react'

import AllStyle from '../../AllStyle'
import Color from '../../colors/Color'
import HeaderButton from '../../components/headerButton/HeaderButton'
import HeaderLogo from '../../components/headerLogo/HeaderLogo'
import SocialMediaIcon from '../../components/socialIcon/SocialMediaIcon'

let { width: screenWidth, height: screenHeight } = Dimensions.get('window')
const About = (props) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,

        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false} style={{}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <View style={{ flex: 1, justifyContent: 'flex-start' }}>
            <Image
              style={{
                resizeMode: 'stretch',
                width: screenWidth,
                height: screenHeight / 3,
              }}
              source={require('../../assets/progccImages/About-Us.jpg')}
            />
          </View>
          <View
            style={{
              flex: 1,
              paddingVertical: 15,
              marginTop: 9,
              backgroundColor: '#fff',
              elevation: 40,
            }}
          >
            <Text
              style={{ fontSize: 18, fontWeight: '700', paddingHorizontal: 15 }}
            >
              About ProGcc
            </Text>
            <View
              style={{
                borderColor: Color.secondaryColor,
                borderBottomWidth: 3,
                width: screenWidth / 5,
                marginLeft: 15,
              }}
            />
            <Text
              style={{
                fontSize: 14,
                marginTop: 10,
                paddingHorizontal: 15,
                letterSpacing: 0.3,
                lineHeight: 22.3,
              }}
            >
              You can get started with your business in UAE, especially in
              Travel, Real Estate, Information & Technology, Legal Affairs,
              Finance, Banking, and Human Resources. Many companies are
              digitizing their operations to improve their performance. ProGcc
              is the way to go to set up your desired business in the UAE.
            </Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'flex-start' }}>
            <Image
              style={{
                resizeMode: 'stretch',
                width: screenWidth,
                height: screenHeight / 3,
              }}
              source={require('../../assets/progccImages/about.jpg')}
            />
          </View>
          <View
            style={{
              flex: 1,
              paddingVertical: 15,
              marginTop: 9,
              backgroundColor: '#fff',
              elevation: 40,
            }}
          >
            <Text
              style={{ fontSize: 18, fontWeight: '700', paddingHorizontal: 15 }}
            >
              Our Mission
            </Text>
            <View
              style={{
                borderColor: Color.secondaryColor,
                borderBottomWidth: 3,
                width: screenWidth / 6,
                marginLeft: 15,
              }}
            />
            <Text
              style={{
                fontSize: 14,
                marginTop: 10,
                paddingHorizontal: 15,
                letterSpacing: 0.3,
                lineHeight: 22.3,
              }}
            >
              To present the information and technology that meets the financial
              needs of the Private, Commercial, and Banking sectors in the best
              way to increase the operational efficiency of the institutions.
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              paddingVertical: 15,
              marginTop: 9,
              backgroundColor: '#fff',
              elevation: 40,
            }}
          >
            <Text
              style={{ fontSize: 18, fontWeight: '700', paddingHorizontal: 15 }}
            >
              Our Vision
            </Text>
            <View
              style={{
                borderColor: Color.secondaryColor,
                borderBottomWidth: 3,
                width: screenWidth / 6,
                marginLeft: 15,
              }}
            />
            <Text
              style={{
                fontSize: 14,
                marginTop: 10,
                paddingHorizontal: 15,
                letterSpacing: 0.3,
                lineHeight: 22.3,
              }}
            >
              To be of UAE's growing value and becoming the world's leading
              credit bureau by exceeding expectations with the innovative
              products and services we have created.
            </Text>
          </View>

          <View
            style={{
              height: screenHeight / 6,
              paddingTop: StatusBar.currentHeight,
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <SocialMediaIcon
              facebookSocial='https://www.facebook.com/PRO-GCC-107895398113832'
              twitterSocial='https://twitter.com/ProGCC2'
              linkedInSocial='https://www.linkedin.com/company/pro-gcc/'
              instagramSocial='https://www.instagram.com/progcc1/'
              websiteSocial='https://www.progcc.org/'
              pintrestSocial='https://www.pinterest.com/progccofficial/'
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

About.navigationOptions = (navData) => {
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
  }
}

export default About
