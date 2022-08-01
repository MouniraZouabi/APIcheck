import React from 'react'
import {useEffect, useState} from "react"
import axios from 'axios'
import Contenu from './Contenu';
import '../src/user.css';


function UserList() {

const [data ,listOfUser ]=useState([])
const getData=()=>{
axios 
.get("https://jsonplaceholder.typicode.com/users")
.then((response)=>listOfUser (response.data))
.catch((err)=>console.log(err));

};
useEffect(()=>{
getData();

},[]);

  return (
    <div style={{display : "flex" , flexDirection:"row" ,flexWrap:"wrap",padding :"10px" ,margin:"5px", justifyContent:"space-evenly" }}>
  {data.map((user )=>(
  
  <Contenu key ={user .id} user ={user }/> ) )}




    </div>

  )
}

export default UserList
