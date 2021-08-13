import { Dimensions, Image, LogBox, StatusBar, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import HeaderButton from '../../components/headerButton/HeaderButton'
import HeaderLogo from '../../components/headerLogo/HeaderLogo'
import React from 'react'
import { ScrollView } from 'react-native'

let { width: screenWidth, height: screenHeight } = Dimensions.get('window')
function TermandCondition() {
  LogBox.ignoreLogs(['Setting a timer for a'])

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}
      >
        <View style={{ flex: 1, justifyContent: 'flex-start' }}>
          <Image
            style={{
              resizeMode: 'stretch',
              width: screenWidth,
              height: screenHeight / 3,
            }}
            source={require('../../assets/progccImages/TermConditions.jpg')}
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
            style={{
              fontSize: 14,
              marginTop: 10,
              paddingHorizontal: 15,
              letterSpacing: 0.3,
              lineHeight: 22.3,
            }}
          >
            Welcome to the website(http://progcc.org/). By using this website,
            you will be deemed to have accepted the following conditions. If you
            disagree with these conditions, please do not enter this site.
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
            style={{
              fontSize: 14,
              marginTop: 10,
              paddingHorizontal: 15,
              letterSpacing: 0.3,
              lineHeight: 22.3,
            }}
          >
            This site belongs to Akventure Group of companies UAE, and some of
            the information on the site is published by the Association. Some of
            it is provided by the Association from other sources.
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
            style={{
              fontSize: 14,
              marginTop: 10,
              paddingHorizontal: 15,
              letterSpacing: 0.3,
              lineHeight: 22.3,
            }}
          >
            While the Akventure Group of companies UAE does its best to ensure
            that the information published on the website is published with
            up-to-date and accurate information, it does not guarantee that this
            information is correct, sufficient, and complete, and declares that
            it does not accept responsibility for viruses, deficiencies and/or
            errors in this information.
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
            style={{
              fontSize: 14,
              marginTop: 10,
              paddingHorizontal: 15,
              letterSpacing: 0.3,
              lineHeight: 22.3,
            }}
          >
            The information published on the website is for informational
            purposes. The Akventure Group of companies UAE does not accept any
            responsibility for the transactions made or made using this
            information.
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
            style={{
              fontSize: 14,
              marginTop: 10,
              paddingHorizontal: 15,
              letterSpacing: 0.3,
              lineHeight: 22.3,
            }}
          >
            Articles/blogs published on this website do not reflect the official
            views of the Association and bind the authors and opinion holders.
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
            style={{
              fontSize: 14,
              marginTop: 10,
              paddingHorizontal: 15,
              letterSpacing: 0.3,
              lineHeight: 22.3,
            }}
          >
            The information on other sites accessed by linking from our site is
            published by the relevant institutions and does not bind the
            Akventure Group of companies UAE.
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
            style={{
              fontSize: 14,
              marginTop: 10,
              paddingHorizontal: 15,
              letterSpacing: 0.3,
              lineHeight: 22.3,
            }}
          >
            Studies published on our website may be published without permission
            by showing the source, but the commercial purpose of this
            information is subject to the written permission of the group.
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
            style={{
              fontSize: 14,
              marginTop: 10,
              paddingHorizontal: 15,
              letterSpacing: 0.3,
              lineHeight: 22.3,
            }}
          >
            AKventures Group of companies reserves the right to change all
            information and design on this site without prior notice.
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

TermandCondition.navigationOptions = (navData) => {
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
export default TermandCondition
