import React, { useEffect, useState } from 'react';
import { db } from '../config';
import { collection, getDocs } from 'firebase/firestore';

export default function Read() {

    const[data, setData]= useState([]);

    useEffect(()=>{
        getData();
    },[])

    useEffect(()=>{
        // console.log(data)
    },[data])

    function getData(){
        const userDetailsRef = collection(db, "data");
        getDocs(userDetailsRef)
        .then(res=>{
            // console.log(res);
            const userData = res.docs.map(data=>(
                {
                    data:data.data(),
                    id: data.id,
                }
            ))
            setData(userData)
        }).catch(error=>{
            console.log(error)
        })
    }

    
    const[value, valueChange]= useState([])
    const getId = (id)=>{
        
    }


  return (
    <div>
        <h2>nihir</h2>
        <button onClick={()=>{getData()}}>click</button>

        <input type="text" name="name" value="name" onChange={handleChange}></input>
        <input type="email" name="email" value="email" onChange={handleChange}></input>
        <input type="phone" name="phone" value="phone" onChange={handleChange}></input>
        <button type="submit" onClick={handleSubmit}>submit</button>

        {
            data.map((item)=>{
                return(
                    <div style={{display:"flex"}} key={item.id}>
                    <h3 style={{marginRight:"40px"}}>{item.data.email}</h3>
                    <h3 style={{marginRight:"40px"}}>{item.data.name}</h3>
                    <h3 style={{marginRight:"40px"}}>{item.data.phone}</h3>
                    <button onClick={()=>{getId(item.id)}}>Update</button>
                    </div>
                )
            })
        }
    </div>
  )
}
