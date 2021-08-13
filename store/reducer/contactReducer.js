import {
  CREATE_CONTACT,
  DELETE_CONTACT_DATA,
  FETCH_CONTACT_FORM_DATA,
} from '../action/contactAction'

import Contact from '../../data/Contact'

const initialState = {
  availableUsers: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONTACT_FORM_DATA:
      return { availableUsers: action.contactData }
    case CREATE_CONTACT:
      const newContactUser = new Contact(
        action.contactData.id,
        action.contactData.title,
        action.contactData.phoneNum,
        action.contactData.email,
        action.contactData.message
      )
      return {
        ...state,
        availableUsers: state.availableUsers.concat(newContactUser),
      }

    case DELETE_CONTACT_DATA:
      return {
        ...state,
        availableUsers: state.availableUsers.filter(
          (contactUser) => contactUser.id !== action.pid
        ),
      }
  }
  return state
}
