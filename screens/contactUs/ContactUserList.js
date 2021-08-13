// screens/UserScreen.js

import {
  ActivityIndicator,
  Alert,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { Avatar, Button, ListItem } from 'react-native-elements'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import React, { useCallback, useEffect, useState } from 'react'
import {
  deleteContactUser,
  fetchContactFormData,
} from '../../store/action/contactAction'
import { useDispatch, useSelector } from 'react-redux'

import Color from '../../colors/Color'
import HeaderButton from '../../components/headerButton/HeaderButton'

const screenWidth = Dimensions.get('screen').width
const screenHeight = Dimensions.get('screen').height

function ContactUserList(props) {
  const [error, setError] = useState()
  const [isLoading, setIsloading] = useState(false)
  const dispatch = useDispatch()
  const usersArray = useSelector((state) => state.contactUsers.availableUsers)

  const loadedUserData = useCallback(async () => {
    setError(null)
    setIsloading(true)
    try {
      await dispatch(fetchContactFormData())
    } catch (err) {
      setError(err.message)
    }
    setIsloading(false)
  }, [dispatch, setError, setIsloading])
  useEffect(() => {
    loadedUserData()
  }, [dispatch, loadedUserData])

  const deleteHandler = (i) => {
    Alert.alert('Are you sure?', 'Do you really want to delete this item?', [
      { text: 'No', style: 'default' },
      {
        text: 'Yes',
        style: 'destructive',
        onPress: () => {
          dispatch(deleteContactUser(i))
        },
      },
    ])
  }

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color={Color.primaryColour} />
      </View>
    )
  }
  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text
          style={{
            color: 'red',
            fontSize: 20,
            fontFamily: 'open-sans-bold',
          }}
        >
          An error occured!!!
        </Text>
        <Button title='Try again' onPress={loadedUserData} />
      </View>
    )
  }
  if (!isLoading && usersArray.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text
          style={{
            color: '#121212',
            fontSize: 20,
            fontFamily: 'open-sans-bold',
          }}
        >
          No User Data to Show
        </Text>
      </View>
    )
  }
  return (
    <ScrollView>
      <View
        style={{
          height: screenHeight,
          width: screenWidth,
        }}
      >
        {usersArray.map((item, i) => {
          console.log(item.id)
          return (
            <View
              key={i}
              style={{
                flex: 1,
                justifyContent: 'flex-start',
                marginTop: 10,
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  width: screenWidth / 1.1,
                  height: screenHeight / 3,
                  elevation: 40,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  backgroundColor: '#fff',
                }}
              >
                <View
                  style={{
                    width: screenWidth / 1.1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: '700',
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      letterSpacing: 0.3,
                      lineHeight: 23.3,
                    }}
                  >
                    {item.message}
                  </Text>
                  <Text style={{ fontSize: 16, fontWeight: '700' }}>
                    {item.email}
                  </Text>
                  <Text style={{ fontSize: 16, fontWeight: '500' }}>
                    {item.mobile}
                  </Text>
                </View>
                <View
                  style={{
                    height: screenHeight / 10,
                    width: screenWidth / 1.1,
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    flexDirection: 'row',
                  }}
                >
                  <Button
                    onPress={deleteHandler.bind(this, item.id)}
                    title='Delete User'
                    type='outline'
                  />
                </View>
              </View>
            </View>
          )
        })}
      </View>
    </ScrollView>
  )
}

ContactUserList.navigationOptions = (navData) => {
  return {
    headerTitle: 'User List',
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 22,
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default ContactUserList
