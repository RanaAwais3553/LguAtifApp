import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native'
import React, { useState } from 'react'

import AllStyle from '../../AllStyle'

const CompaniesDetail = ({ servicedetail, title, servicesImages }) => {
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
          {/* <View style={AllStyle.aboutSwiper}> */}
          {/* <SwiperComponent /> */}
          {/* <Image
              style={{
                resizeMode: 'stretch',
                height: screenHeight / 3,
                width: screenWidth,
              }}
              source={servicesImages}
            /> */}
          {/* </View> */}
          <View style={{}}>
            <Text
              style={[
                { fontSize: 24, textAlign: 'center', color: '#000000' },
                AllStyle.Aboutheading,
              ]}
            >
              Awais
            </Text>
          </View>

          <View>
            <View>
              <Text style={[{ marginRight: 8 }, AllStyle.Aboutdetail]}>
                {servicedetail}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default CompaniesDetail
