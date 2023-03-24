import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requests, setRequest] = useState<string>("");

    function updateRequest(event: React.ChangeEvent<HTMLInputElement>) {
        setRequest(event.target.value);
    }
    const validRequest = Number.isNaN(requests) ? 0 : Number(requests);

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>attempts: {attemptsLeft}</div>
            <Button
                onClick={() => setAttemptsLeft(attemptsLeft - 1)}
                disabled={attemptsLeft === 0}
            >
                use
            </Button>
            <Button
                onClick={() => setAttemptsLeft(attemptsLeft + validRequest)}
            >
                gain
            </Button>
            <div>
                <Form.Label>Type Request Here: </Form.Label>
            </div>
            <Form.Control
                type="number"
                value={requests}
                onChange={updateRequest}
            />
        </div>
    );
}
