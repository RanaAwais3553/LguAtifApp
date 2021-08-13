import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { Image, ImageBackground, StyleSheet, View } from 'react-native'

import HeaderButton from '../../components/headerButton/HeaderButton'
import HeaderLogo from '../../components/headerLogo/HeaderLogo'
import OurTeam from '../../components/ourTeam/OurTeam'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const Portfolio = (props) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#f0f0f0' }}>
      {/* <Image
        source={require('../../assets/joinus.jpg')}
        style={StyleSheet.absoluteFillObject}
      /> */}
      <ScrollView
        style={{ flex: 1, marginTop: 0 }}
        showsVerticalScrollIndicator={false}
      >
        <OurTeam
          name='Alice Brian'
          status='active'
          contact='+92 3124478987'
          area='SEO expert'
          imges={require('../../assets/seo.png')}
        />
        <OurTeam
          name='Donald Douglas'
          status='active'
          contact='+92 3404478987'
          area='SMM Specialist'
          imges={require('../../assets/smm.png')}
        />
        <OurTeam
          name='Mr. Ali'
          status='active'
          contact='+92 3324478987'
          area='Project Manager'
          imges={require('../../assets/projectmanager.png')}
        />
        <OurTeam
          name='Smith'
          status='active'
          contact='+92 3334478987'
          area='PPC expert'
          imges={require('../../assets/ppcexpert.png')}
        />
      </ScrollView>
    </View>
  )
}

Portfolio.navigationOptions = (navData) => {
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

export default Portfolio
