import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const DEFAULT_OPTION = options[0];
    const [currChoice, setCurrChoice] = useState<string>(DEFAULT_OPTION);

    function updateCurrChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setCurrChoice(event.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="userOptions">
                <Form.Label>What is your choice?</Form.Label>
                <Form.Select value={currChoice} onChange={updateCurrChoice}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
                {currChoice === expectedAnswer ? "✔️" : "❌"}
            </Form.Group>
        </div>
    );
}
