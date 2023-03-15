//import { type } from "os";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [whatType, setState] = useState<QuestionType>(
        "short_answer_question"
    );

    function changeQuestionType(): void {
        if (whatType === "short_answer_question") {
            setState("multiple_choice_question");
        } else {
            setState("short_answer_question");
        }
    }

    return (
        <div>
            <div>
                <Button onClick={changeQuestionType}>Change Type</Button>
            </div>
            <div>
                Current Type:{" "}
                {whatType === "multiple_choice_question" ? (
                    <span>Multiple Choice</span>
                ) : (
                    <span>Short Answer</span>
                )}
            </div>
        </div>
    );
}
