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
import React, { useEffect } from 'react'

import Color from '../colors/Color'
import HeaderButton from '../components/headerButton/HeaderButton'
import HeaderLogo from '../components/headerLogo/HeaderLogo'
import HomeCategories from '../components/homeScreen/HomeCategories'
import axios from 'axios'

let { width: screenWidth, height: screenHeight } = Dimensions.get('window')

function HomeServicesList(props) {
  const [homeServices, setServices] = React.useState([])
  const headerimgs = props.navigation.getParam('serImage')
  const title = props.navigation.getParam('title')
  const detail = props.navigation.getParam('detail')
  const proServicesArray = props.navigation.getParam('proServices')

  const servicesHeader = () => {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            width: screenWidth,
            height: screenHeight / 3,
          }}
        >
          <Image
            style={{
              width: screenWidth,
              height: screenHeight / 3,
              resizeMode: 'stretch',
            }}
            source={headerimgs}
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
            {title}
          </Text>
          <View
            style={{
              borderColor: Color.secondaryColor,
              borderBottomWidth: 3,
              width: screenWidth / 4.5,
              marginLeft: 15,
            }}
          />
          <Text
            style={{
              fontSize: 14,
              marginTop: 10,
              paddingHorizontal: 15,
              letterSpacing: 0.2,
              lineHeight: 22.3,
              fontFamily: 'open-sans',
            }}
          >
            {detail}
          </Text>
        </View>
      </View>
    )
  }
  const renderItem = (itemData) => {
    return (
      <HomeCategories
        title={itemData.item.title}
        serviceLogo={itemData.item.icon.url}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'Home_Services_Detail',
            params: {
              serId: itemData.item._id,
              serTitle: itemData.item.title,
              serDetail: itemData.item.details,
              serImage: itemData.item.image[0].url,
            },
          })
        }}
      />
    )
  }
  return (
    <>
      <View style={{ flex: 1 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={proServicesArray}
          keyExtractor={(item) => item._id}
          renderItem={renderItem}
          ListHeaderComponent={servicesHeader}
          numColumns={3}
        />
      </View>
    </>
  )
}

export default HomeServicesList

HomeServicesList.navigationOptions = (navData) => {
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
