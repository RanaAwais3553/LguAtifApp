import {
  Dimensions,
  Image,
  Platform,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useState } from 'react'

import Color from '../../colors/Color'

let { width: screenWidth, height: screenHeight } = Dimensions.get('window')

function HomeServices({ title, onSelect, logo }) {
  const [rippleColor, setRippleColor] = useState(randomHexColor())
  const [rippleOverflow, setRippleOverflow] = useState(false)
  let TouchableCmp = TouchableOpacity

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, marginTop: 20 }}>
        <TouchableNativeFeedback
          //   onPress={onSelect}
          onPress={() => {
            setRippleColor(randomHexColor())
            setRippleOverflow(!rippleOverflow)
            onSelect()
          }}
          // onPress={onSelect}
          background={TouchableNativeFeedback.Ripple(
            rippleColor,
            rippleOverflow
          )}
          style={{ flex: 1 }}
        >
          <View
            style={{
              width: screenWidth / 1.1,
              height: screenHeight / 5.5,
              marginTop: 80,
              borderTopStartRadius: 10,
              borderTopEndRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: Color.secondaryColor,
              // elevation: 40,
              alignSelf: 'stretch',
            }}
          >
            <View
              style={{
                width: screenWidth / 1.2,
                height: screenHeight / 5,
                top: '-40%',
                elevation: 40,
                // flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
              }}
            >
              <Image
                style={{
                  resizeMode: 'contain',
                  height: screenHeight / 6,
                  width: screenWidth / 4,
                  top: '-10%',
                }}
                source={logo}
              />
              <Text
                style={{
                  color: '#121212',
                  textAlign: 'center',
                  fontSize: 18,
                  top: '-20%',
                  fontWeight: '700',
                }}
              >
                {title}
              </Text>
            </View>

            <Text
              style={{
                top: '-30%',
                color: '#fff',
                fontSize: 18,
                fontWeight: '700',
              }}
            >
              View Services
            </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  )
}
const randomHexColor = () => {
  return '#000000'.replace(/0/g, function () {
    return (~~(Math.random() * 16)).toString(16)
  })
}
export default HomeServices
