import React, { useState } from "react";
import { Form } from "react-bootstrap";

//{expectedAnswer}: {expectedAnswer: string;}): JSX.Element

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function updateAnswers(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formtheAnswer">
                <Form.Label>Answer:</Form.Label>
                <Form.Control onChange={updateAnswers} />
                {answer === expectedAnswer ? "✔️" : "❌"}
            </Form.Group>
            <div>The answer is {answer}</div>
        </div>
    );
}
