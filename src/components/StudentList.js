import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_STUDENTS, RETRIEVE_TUTORIALS } from "../actions/types";
import StudentService from "../services/Studentservice";
import TutorialService from "../services/TutorialService";


export default function StudentList(){

    const students = useSelector(state => {
        return state.students
    });

    const [student, setStudent] = useState({})

    const dispatch = useDispatch();
  
    useEffect(() => {  
      get_students()
      
    }, []);

    
    const get_students = async () => {
        // try {
        //     const response = await fetch('http://localhost:3000/students');
        //     const data = await response.json();
               
        //   dispatch({
        //     type: "GET_STUDENTS",
        //     payload: data,
        //   });

        // } catch (err) {
        //   console.log(err);
        // }
        const res = await StudentService.getAll()
        dispatch({
                type: "GET_STUDENTS",
                payload: res.data,
              });
      };


      const deleteHandler = async (id)=>{
        const res = await StudentService.remove (id)
        dispatch({
                type: "DELETE_STUDENT",
                payload: {id},
              });
      }; 

      const editHandler = async (id)=>{
        const res = await StudentService.get(id)
        //console.log(res.data)
        dispatch({
            type: "GET_STUDENT",
            payload: res.data
        })
      }; 
      
      

    return (
        <>
         <h1>Student List</h1>
         {students.map(s=>(
             <li>{s.name} 
             
             <button onClick={()=>deleteHandler(s.id)}>Delete</button>
             <button onClick={()=>editHandler(s.id)}>Edit</button>

             
             </li>
         ))}

        </>
    )
}