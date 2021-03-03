import React,{useEffect,useState} from 'react'
import firebase from "../Firebase/firebase";
import By from '../../Images/by.png'
import { Col, Row } from "react-bootstrap";
import './ContactInfo.css'

export default function ContactInfo() {
    const [items, setItem] =useState([{}])
    useEffect(() => { 
        let uns = firebase
          .firestore()
          .collection("contact")
          .onSnapshot((snapshot) => {
            var all = snapshot.docs.map((doc) => {
              return { ...doc.data() };
            });
            setItem(all);
          });
    
        return () => uns();
      }, []);

      console.log(items)
    return (
        <div id="Contact">
            <Row className="justify-content-start title">Contact Info</Row>
            <Row className="justify-content-start">
            <Col className="contact">
                {items? items.map(e=><li>{e.name}: {"  "+e.value}</li>):""}


            </Col>
            <Col className="align-self-center" xl={4} lg={4} md={6} sm={12} xs={12}>

            <img
            src={By}
            width="280px"
            height="200px"
            alt=""
          />
            </Col>
            </Row>
        </div>
    )
}
