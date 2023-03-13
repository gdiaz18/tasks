import React from "react";
import "./App.css";
<<<<<<< HEAD
import img from "./jack.jpeg";
import { Button, Col, Container, Row } from "react-bootstrap";
=======
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
>>>>>>> upstream/task-state

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript;
            </header>
<<<<<<< HEAD
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
=======
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
>>>>>>> upstream/task-state
        </div>
    );
}

export default App;
