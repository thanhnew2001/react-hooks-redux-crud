import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ADD_STUDENT, UPDATE_STUDENT } from "../actions/types"
import StudentService from "../services/StudentService"


export default function StudentForm(){

    const dispatch = useDispatch()
    const [name, setName] =  useState('')
    const [id, setId] =  useState(0)

    const editStudent = useSelector(state => {
        return state.editStudent
    })



    const save = async ()=>{

        if (id>0){
            const data = JSON.stringify({id: id, name: name})
            const res = await StudentService.update(data)
            dispatch({
                type: UPDATE_STUDENT,
                payload: {id: id, name: name}
            })
        }
        else{
            const data = JSON.stringify({name: name})
            const res = await StudentService.create(data)
            dispatch({
                type: ADD_STUDENT,
                payload: res.data
            })
        }       
    }

    useEffect(()=>{
        console.log(editStudent)
        setId(editStudent.id)
        setName(editStudent.name)
    }, [editStudent])

    const addNew = ()=>{
        setId(0)
        setName('')
    }

    return (

        <>
        Id: <input type='text' value={id} onChange={(e)=>setId(e.target.value)} />

        Name: <input type='text' value={name} onChange={(e)=>setName(e.target.value)} />
        <button onClick={()=>save()}>Save</button>
        <button onClick={()=>addNew()}>New</button>
        </>
    )
}