import React, { useState } from "react";
import firebase from '../../Firebase/firebase'

import { Form, Button } from "react-bootstrap";
export default function Massege(props) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [massege, setMessage] = useState('')
    // const [show, setShow] = useState(false);

    const upDateName=(e)=>{
        setName(e.target.value)
    }
    const upDateEmail=(e)=>{
        setEmail(e.target.value)
    }
    const upDateMassege=(e)=>{
        setMessage(e.target.value)
    }

    const SubMitData=(e)=>{
        e.preventDefault()

        if(name!=="" && massege !=="" && email!==""){
            firebase
            .firestore()
            .collection("masseges")
            .add({name:name,email:email,massege:massege})
            .then(() => {
              setName("");
              setEmail("");
              setMessage("");
            //   clickMe();
            })
             
        }

        else{
            alert('full all inputes')
        }

       
    }

    // const clickMe = () => {
    //     props.changeShow()
    // }
  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="Text" value={name} onChange={upDateName} placeholder="Your Name" required />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" value={email} onChange={upDateEmail} placeholder="Enter email" required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Body</Form.Label>
          <Form.Control as="textarea" value={massege} onChange={upDateMassege} placeholder="Your Massege" required />
        </Form.Group>

        <Button onClick={SubMitData} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

 