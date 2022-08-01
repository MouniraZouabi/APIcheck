import React from 'react'
import Card from 'react-bootstrap/Card';
const Contenu = ({user }) => {
    console.log(user )
  return (
    <div>

<br />
      <Card border="info" style={{ width: '30rem' ,height: '24rem', alignContent:"center" }}>
        <Card.Header style={{fontFamily:"cursive", textAlign:"center" , backgroundColor :"#63C5DA", fontSize:"20px" ,color :"black"}}>User {user.id} : {user.username}   {user.name}  </Card.Header>
        <Card.Body style={{ backgroundColor:"", fontFamily:"revert", fontSize:"20px"}}>
          <Card.Title></Card.Title>
          <Card.Text >

<h6 ><span>Email :</span> {user.email}</h6>
<h6 ><span>Address :</span> 
<li> Suite : {user.address.suite}</li>
 <li>ZipCode : {user.address.zipcode}</li>
 <li>City : {user.address.city}</li>
 <li>Geo & lat :  {user.address.geo.lat} , {user.address.geo.lng}</li>

 </h6>
 <h6 ><span>Web site :</span> {user.website}</h6>

<h6 ><span>Phone :</span> {user.phone} </h6>

<h6 ><span>Company :</span> 
<li> Name: {user.company.name}</li>
<li> CatchPhase: {user.company.catchPhrase} </li>
<li> Bs :{user.company.bs}</li>
 </h6>


          </Card.Text>
        </Card.Body>
      </Card>
      <br />



 </div>
  )
}

export default Contenu