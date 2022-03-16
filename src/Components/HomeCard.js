import React from "react";
import { Card, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Rutik from "../Assets/rutik.png"
import Typist from 'react-typist';

export default function HomeCard() {
  return (
    <div class="flex justify-center items-center h-screen ">
      <Card class="border-0 " style={{ width: "25rem" }}>
        <Card.Img class="rounded-full w-32 h-32 mx-auto" variant="left" src={Rutik} />
        <Card.Body class="justify-center">
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
           <Typist> Some quick example text to build on the card title and make up the
            bulk of the card's content.</Typist>
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
