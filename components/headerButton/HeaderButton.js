import Color from '../../colors/Color'
import { HeaderButton } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons'
import { Platform } from 'react-native'
import React from 'react'

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={30}
      color={Platform.OS === 'android' ? '#121212' : '#121212'}
    />
  )
}

export default CustomHeaderButton
