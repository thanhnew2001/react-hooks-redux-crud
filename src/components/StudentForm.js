import { useState } from "react"
import { useDispatch } from "react-redux"
import { ADD_STUDENT } from "../actions/types"


export default function StudentForm(){

    const dispatch = useDispatch()

    const [name, setName] =  useState('')
    const save = async ()=>{
        const res = await fetch('http://localhost:3000/students', {
            'headers': {
                'Content-Type': 'application/json'
            },
            'method': 'post',
            body: JSON.stringify({name: name})
        })
        const data = await res.json()

        dispatch({
            type: ADD_STUDENT,
            payload: data
        })
    }


    return (

        <>
        Name: <input type='text' value={name} onChange={(e)=>setName(e.target.value)} />
        <button onClick={()=>save()}>Save</button>
        </>
    )
}