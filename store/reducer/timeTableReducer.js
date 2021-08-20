import {
  CREATE_TIMETABLE,
  DELETE_TIMETABLE,
  FETCH_TIMETABLE,
} from "../action/timeTableAction";

import TimeTable from "../../data/timeTable";

const initialState = {
  availableTimeTable: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TIMETABLE:
      return { availableTimeTable: action.enrollUserData };
    case CREATE_TIMETABLE:
      const newTimeTable = new TimeTable(
        action.getCourseData.id,

        action.getCourseData.imageURI,
        action.getCourseData.title
      );
      return {
        ...state,
        availableTimeTable: state.availableTimeTable.concat(newTimeTable),
      };

    case DELETE_TIMETABLE:
      return {
        ...state,
        availableTimeTable: state.availableTimeTable.filter(
          (enrollUser) => enrollUser.id !== action.pid
        ),
      };
  }
  return state;
};
