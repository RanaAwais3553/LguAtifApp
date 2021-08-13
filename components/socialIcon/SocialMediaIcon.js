import { Linking, View } from 'react-native'

import Color from '../../colors/Color'
import React from 'react'
import { SocialIcon } from 'react-native-elements'

const SocialMediaIcon = ({
  facebookSocial,
  twitterSocial,
  linkedInSocial,
  instagramSocial,
  websiteSocial,
  pintrestSocial,
}) => {
  return (
    <View style={{ flex: 1, flexDirection: 'row', bottom: 0 }}>
      <SocialIcon
        type='twitter'
        raised={false}
        iconSize={18}
        onPress={() => Linking.openURL(twitterSocial)}
      />

      <SocialIcon
        raised={false}
        type='instagram'
        iconSize={18}
        onPress={() => Linking.openURL(instagramSocial)}
      />

      <SocialIcon
        raised={false}
        type='facebook'
        iconSize={18}
        onPress={() => Linking.openURL(facebookSocial)}
      />
      <SocialIcon
        raised={false}
        type='linkedin'
        iconSize={18}
        onPress={() => Linking.openURL(linkedInSocial)}
      />
      <SocialIcon
        raised={false}
        style={{ backgroundColor: '#9FA5AA' }}
        type='globe'
        iconSize={18}
        onPress={() => Linking.openURL(websiteSocial)}
      />
      <SocialIcon
        raised={false}
        style={{ backgroundColor: Color.primaryColour }}
        type='pinterest'
        iconSize={18}
        onPress={() => Linking.openURL(websiteSocial)}
      />
    </View>
  )
}
export default SocialMediaIcon
