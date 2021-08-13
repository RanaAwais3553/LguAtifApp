import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import Companies from '../../components/allcompanies/Companies.js'
import CompaniesData from '../../data/Companies.js'
import HeaderButton from '../../components/headerButton/HeaderButton'
import HeaderLogo from '../../components/headerLogo/HeaderLogo'
import React from 'react'

const TestMonial = (props) => {
  const renderItem = (itemData) => {
    return (
      <Companies
        title={itemData.item.title}
        companyImages={itemData.item.image}
        weburi={itemData.item.uri}
      />
    )
  }
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={CompaniesData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        numColumns={2}
      />
    </View>
  )
}

TestMonial.navigationOptions = (navData) => {
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

export default TestMonial
