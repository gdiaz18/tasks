import React from "react";
import "./App.css";
import img from "./jack.jpeg";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript;
            </header>
            <h1>Gia Diaz </h1>
            <Container>
                <Row>
                    <Col>
                        <div className="column1"></div>
                        Edit <code>src/App.tsx</code> and save.
                    </Col>
                    <Col>
                        <div className="column2"></div>
                        This page will automatically reload.
                    </Col>
                </Row>
            </Container>
            <img src={img} alt="My dog Jack" />
            <ul>
                <li>My dog Jack</li>
                <li>He is a Teacup Shitzu</li>
                <li>He is 12 years old</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
        </div>
    );
}

export default App;
