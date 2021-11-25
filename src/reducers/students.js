import {
    GET_STUDENTS, ADD_STUDENT

  } from "../actions/types";
  
  const initialState = [];
  
  const studentReducer = (students = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {  
      case GET_STUDENTS:
        //console.log(payload)
        return payload;

      case ADD_STUDENT:
          return [...students, payload]

      default:
        return students;
    }
  };
  
  export default studentReducer;