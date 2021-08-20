import TimeTable from "../../data/timeTable";

export const DELETE_TIMETABLE = "DELETE_TIMETABLE";
export const CREATE_TIMETABLE = "CREATE_TIMETABLE";
export const FETCH_TIMETABLE = "FETCH_TIMETABLE";

export const deleteTimeTable = (enrollUserId) => {
  console.log(enrollUserId);

  return async (dispatch, getState) => {
    const token = getState().auth.token;
    await fetch(
      `https://dummyapp-86c96-default-rtdb.firebaseio.com/timeTable${enrollUserId}.json?auth=${token}`,
      {
        method: "DELETE",
      }
    );
    dispatch({ type: DELETE_TIMETABLE, pid: enrollUserId });
  };
};

export const fetchTimeTable = () => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    try {
      const response = await fetch(
        `https://dummyapp-86c96-default-rtdb.firebaseio.com/timeTable.json?auth=${token}`
      );

      if (!response.ok) {
        throw new Error("Something went wrong!!");
      }
      const resData = await response.json();
      console.log("Fetch API Data is:!", resData);
      const loadedData = [];
      for (const key in resData) {
        loadedData.push(
          new TimeTable(
            key,

            resData[key].imageURI,
            resData[key].name
          )
        );
      }
      console.log("Fetch data is!!", loadedData);
      dispatch({
        type: FETCH_TIMETABLE,
        enrollUserData: loadedData,
      });
    } catch (err) {
      throw err;
    }
  };
};
export const createTimeTable = (imageURI, name) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const response = await fetch(
      `https://dummyapp-86c96-default-rtdb.firebaseio.com/timeTable.json?auth=${token}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          imageURI,
          name,
        }),
      }
    );

    const resData = await response.json();
    console.log(resData);
    dispatch({
      type: CREATE_TIMETABLE,
      getCourseData: {
        id: resData.name,
        imageURI,
        name,
      },
    });
  };
};
