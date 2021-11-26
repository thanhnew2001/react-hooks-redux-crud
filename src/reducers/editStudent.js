
import {
     GET_STUDENT

  } from "../actions/types";


const editStudentReducer = (editStudent = {id: 0, name: ''}, action)=>{
    const { type, payload } = action;
  
    switch (type) {  
      case "GET_STUDENT":
          return payload
    
      default:
        return editStudent;
    }
  };
  

export default editStudentReducer;