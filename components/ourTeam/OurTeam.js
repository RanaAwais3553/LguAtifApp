import { Avatar, Icon } from 'react-native-elements'
import { Text, TouchableOpacity, View } from 'react-native'

import { Card } from 'react-native-paper'
import Colors from '../../colors/Color'
import React from 'react'

const OurTeam = ({ name, status, contact, area, imges }) => {
  return (
    <Card style={{ flex: 1, marginTop: 20, marginHorizontal: 5 }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 10,
        }}
      >
        <Avatar
          rounded
          size={106}
          overlayContainerStyle={{ backgroundColor: 'blue' }}
          containerStyle={{ marginLeft: 20, margin: 11 }}
          source={imges}
          activeOpacity={0.7}
        />
        <View style={{ flex: 1, marginHorizontal: 20 }}>
          <Text style={{ color: Colors.primaryColor }}>{name}</Text>
          <Text style={{ color: Colors.primaryColor }}>{status}</Text>
          <Text style={{ color: Colors.primaryColor }}>{area}</Text>
          <Text style={{ color: Colors.primaryColor }}>{contact}</Text>

          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Icon
              raised
              name='facebook'
              type='font-awesome'
              color={Colors.primaryColor}
              activeOpacity={0.5}
              size={14}
            />
            <Icon
              raised
              name='twitter'
              type='font-awesome'
              color={Colors.primaryColor}
              activeOpacity={0.5}
              size={14}
            />
            <Icon
              raised
              name='instagram'
              type='font-awesome'
              color={Colors.primaryColor}
              activeOpacity={0.5}
              size={14}
            />
            <Icon
              raised
              name='linkedin'
              type='font-awesome'
              color={Colors.primaryColor}
              activeOpacity={0.5}
              size={14}
            />
          </View>
        </View>
      </View>
    </Card>
  )
}

export default OurTeam
