import React, { useState } from "react";
import {
  Button,
  Nav,
  Card,
  Row,
  Col,
  Container,
  Navbar,
  Jumpotron,
  Form,
  InputGroup,
  FormControl,
  Modal,
  Alert,
} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import DatePicker from "react-date-picker";

const logo = require("./infectious-waste-bin.png");

function App() {
  const [id, setID] = useState(["6310210745"]);
  const [name, setName] = useState(["Purinat Noowilai"]);
  const [ward, setWard] = useState([""]);
  const [weight, setWeight] = useState([""]);
  const [value, onChange] = useState(new Date());
  const [date, setDate] = useState([""]);
  const addTask = () => {
    // setData([
    //   ...data,name
    // ])
    <Alert key="primary">This is a {id} alert—check it out!</Alert>;
  };
  return (
    <div className="App">
      <Modal.Dialog>
        <Card style={{ width: "35rem" }}>
          <center>
            <Card.Img variant="middle" src={logo} width="320" height="300" />
          </center>
          <Card.Body>
            <Card.Title>Record Infectious waste</Card.Title>
            <Card.Text>
              <Form>
                <Row className="mb-3">
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                      ID
                    </InputGroup.Text>
                    <FormControl
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      readOnly
                      defaultValue={id}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                      Name
                    </InputGroup.Text>
                    <FormControl
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      readOnly
                      defaultValue={name}
                    />
                  </InputGroup>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Ward</Form.Label>
                    <Form.Select
                      defaultValue="Choose..."
                      onChange={(e) => setWard(e.target.value)}
                    >
                      <option>Select Ward</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Weight</Form.Label>
                    <Form.Control
                      placeholder="(Kg.)"
                      onChange={(e) => setWeight(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Date</Form.Label>
                    <input
                      placeholder="Select date"
                      type="date"
                      className="form-control"
                      onChange={(e) => setDate(e.target.value)}
                    ></input>
                  </Form.Group>
                </Row>
                <div></div>
                <center>
                  <Button variant="primary" type="submit" onClick={addTask}>
                    Save
                  </Button>
                </center>
              </Form>
            </Card.Text>
            <div>
              
                <Alert key="primary">
                  ID : {id} <br />
                  Name : {name} <br />
                  Ward : {ward}
                  <br />
                  Weight : {weight} Kg.
                  <br />
                  Date : {date}
                </Alert>
             
            </div>
          </Card.Body>
        </Card>
      </Modal.Dialog>
    </div>
  );
}

export default App;
