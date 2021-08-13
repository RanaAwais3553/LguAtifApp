import {
  Image,
  Linking,
  Platform,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useState } from 'react'

import { Card } from 'react-native-paper'

const Companies = ({ companyImages, weburi, title }) => {
  const [rippleColor, setRippleColor] = useState(randomHexColor())
  const [rippleOverflow, setRippleOverflow] = useState(false)
  let TouchableCmp = TouchableOpacity

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback
  }
  return (
    <View
      style={{
        flex: 1,
        maxWidth: '50%',
        margin: 9,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TouchableNativeFeedback
        //  onPress={() => Linking.openURL('http://google.com')}
        onPress={() => {
          setRippleColor(randomHexColor())
          setRippleOverflow(!rippleOverflow)
          Linking.openURL(`${weburi}`)
        }}
        // onPress={onSelect}
        background={TouchableNativeFeedback.Ripple(rippleColor, rippleOverflow)}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Card style={{ flex: 0.7, minWidth: '100%' }}>
          <Card.Content>
            <Image
              source={companyImages}
              style={{ resizeMode: 'cover', height: 100, width: 120 }}
            />

            <Text style={{ fontSize: 14 }}>{title}</Text>
          </Card.Content>
        </Card>
      </TouchableNativeFeedback>
    </View>
  )
}
const randomHexColor = () => {
  return '#000000'.replace(/0/g, function () {
    return (~~(Math.random() * 16)).toString(16)
  })
}
export default Companies
