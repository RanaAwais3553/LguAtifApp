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

const HomeCategories = ({ onSelect, title, serviceLogo }) => {
  const [rippleColor, setRippleColor] = useState(randomHexColor())
  const [rippleOverflow, setRippleOverflow] = useState(false)
  let TouchableCmp = TouchableOpacity

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback
  }

  return (
    <View
      style={{
        // flex: 1,
        maxWidth: '29.8%',
        margin: 6,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TouchableNativeFeedback
        //  onPress={() => Linking.openURL('http://google.com')}
        onPress={() => {
          setRippleColor(randomHexColor())
          setRippleOverflow(!rippleOverflow)
          onSelect()
        }}
        // onPress={onSelect}
        background={TouchableNativeFeedback.Ripple(rippleColor, rippleOverflow)}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Card
          style={{
            flex: 1,
            minWidth: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Card.Content
            style={{ justifyContent: 'center', alignItems: 'center' }}
          >
            <Image
              source={{ uri: serviceLogo }}
              style={{ resizeMode: 'stretch', height: 40, width: 40 }}
            />

            <Text
              style={{ fontWeight: '700', textAlign: 'center', fontSize: 11 }}
            >
              {title}
            </Text>
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
export default HomeCategories
