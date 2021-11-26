import {
    GET_STUDENTS, ADD_STUDENT, DELETE_STUDENT, GET_STUDENT, UPDATE_STUDENT

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

      case UPDATE_STUDENT:
            return students.map((s) => {
              if (s.id === payload.id) {
                return {
                  ...s,
                  ...payload,
                };
              } else {
                return s;
              }
            });

      case DELETE_STUDENT:
          return students.filter(s=>s.id!=payload.id)
    
      default:
        return students;
    }
  };
  
  export default studentReducer;