import { isVisible } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateEdit(event: React.ChangeEvent<HTMLInputElement>) {
        setIsEdit(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="in-EditMode-check"
                label="Edit Mode?"
                checked={isEdit}
                onChange={updateEdit}
            />
            {isEdit ? (
                <Form.Check
                    type="checkbox"
                    id="is-student-check"
                    label="Is Student?"
                    checked={isStudent}
                    onChange={updateIsStudent}
                />
            ) : (
                <></>
            )}
            <div>{"\n"}</div>
            {isEdit ? (
                <Form.Group controlId="formEnterName">
                    <Form.Label>Enter Name of Student: </Form.Label>
                    <Form.Control value={name} onChange={updateName} />
                </Form.Group>
            ) : (
                <></>
            )}
            <p>
                {" "}
                {name} is {isStudent ? "" : "not"} a student.
            </p>
        </div>
    );
}
