import React from 'react'
import { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore';
import {db} from '../config'

export default function Form() {
    const userCollection = collection(db, "data");
    

    const[item, setItem]= useState([]);

    
    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setItem({...item,[name]: value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(item)
        addDoc(userCollection, item)
        .then(()=>{
            alert("submitted succesfully")
        })
        .catch((error)=>{
            alert("there has been an error"+error.message)
        })
    }



  return (
    <div>
        <form>
            <input type="text" name="name" placeholder="name" onChange={handleChange}></input>
            <input type="email" name="email" placeholder="email" onChange={handleChange}></input>
            <input type="phone" name="phone" placeholder="phone" onChange={handleChange}></input>
            <button type="submit" onClick={handleSubmit}>submit</button>

        </form>
    </div>
  )
}
