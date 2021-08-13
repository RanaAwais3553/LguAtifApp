import Contact from "../../data/Contact";

export const DELETE_CONTACT_DATA = "DELETE_CONTACT_DATA";
export const CREATE_CONTACT = "CREATE_CONTACT";
export const FETCH_CONTACT_FORM_DATA = "FETCH_CONTACT_FORM_DATA";

export const deleteContactUser = (contactUserIndex) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    await fetch(
      `https://dummyapp-86c96-default-rtdb.firebaseio.com/contact/${contactUserIndex}.json?auth=${token}`,
      {
        method: "DELETE",
      }
    );
    dispatch({ type: DELETE_CONTACT_DATA, pid: contactUserIndex });
  };
};

export const fetchContactFormData = () => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    try {
      const response = await fetch(
        `https://dummyapp-86c96-default-rtdb.firebaseio.com/contact.json?auth=${token}`
      );

      if (!response.ok) {
        throw new Error("Something went wrong!!");
      }
      const resData = await response.json();
      const loadedData = [];
      for (const key in resData) {
        loadedData.push(
          new Contact(
            key,
            "ul",
            resData[key].name,
            resData[key].phoneNum,
            resData[key].message,
            resData[key].email
          )
        );
      }
      dispatch({ type: FETCH_CONTACT_FORM_DATA, contactData: loadedData });
    } catch (err) {
      throw err;
    }
  };
};
export const createContactForm = (name, phoneNum, email, message) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const response = await fetch(
      `https://dummyapp-86c96-default-rtdb.firebaseio.com/contact.json?auth=${token}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phoneNum,
          email,
          message,
        }),
      }
    );

    const resData = await response.json();
    dispatch({
      type: CREATE_CONTACT,
      contactData: {
        id: resData.name,
        name,
        phoneNum,
        email,
        message,
      },
    });
  };
};
