import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import React, { useEffect } from 'react'

import AllStyle from '../AllStyle'
import Color from '../colors/Color'
import HeaderButton from '../components/headerButton/HeaderButton'
import HeaderLogo from '../components/headerLogo/HeaderLogo'
import Markdown from 'react-native-markdown-renderer'
import axios from 'axios'

let { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const HomeServices = (props) => {
  const img = props.navigation.getParam('serImage')
  const serTitle = props.navigation.getParam('serTitle')
  const serDetail = props.navigation.getParam('serDetail')

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1 }}>
          <View style={AllStyle.aboutSwiper}>
            {/* <SwiperComponent /> */}
            <Image
              style={{
                resizeMode: 'stretch',
                height: screenHeight / 3,
                width: screenWidth,
              }}
              source={{ uri: img }}
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
              {serTitle}
            </Text>
            <View
              style={{
                borderColor: Color.secondaryColor,
                borderBottomWidth: 3,
                width: screenWidth / 2,
                marginLeft: 15,
              }}
            />
            {/* <Text
              style={{
                fontSize: 14,
                marginTop: 10,
                paddingHorizontal: 15,
                letterSpacing: 0.2,
                lineHeight: 22.3,
                fontFamily: 'open-sans',
              }}
            > */}
            <View style={{ flex: 1, paddingHorizontal: 15 }}>
              <Markdown>{serDetail}</Markdown>
            </View>
            {/* </Text> */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

HomeServices.navigationOptions = (navData) => {
  return {
    headerTitle: () => <HeaderLogo />,
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Menu'
          iconName='arrow-back'
          onPress={() => {
            navData.navigation.goBack()
          }}
        />
      </HeaderButtons>
    ),
  }
}
export default HomeServices
