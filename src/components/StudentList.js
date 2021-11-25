import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_STUDENTS, RETRIEVE_TUTORIALS } from "../actions/types";
import TutorialService from "../services/TutorialService";


export default function StudentList(){

    const students = useSelector(state => {
        //setStudentList(state.students)
        console.log(state)
        return state.students
    });
    const dispatch = useDispatch();

    const tutorials = useSelector(state => state.tutorials);
  

    useEffect(() => {  
      get_students()
      
    }, []);

    
    const get_students = async () => {
        try {
            const response = await fetch('http://localhost:3000/students');
            const data = await response.json();
               
          dispatch({
            type: "GET_STUDENTS",
            payload: data,
          });

        } catch (err) {
          console.log(err);
        }
      };
      

    return (
        <>
         <h1>Student List</h1>
         {students.map(s=>(
             <li>{s.name}</li>
         ))}

        </>
    )
}