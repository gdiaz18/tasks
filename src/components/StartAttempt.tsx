import { getByText } from "@testing-library/react";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setValue] = useState<number>(4);
    const [inProgress, setState] = useState<boolean>(false);

    function startQuiz(): void {
        setValue(attempts - 1);
        setState(true);
    }

    return (
        <div>
            <div>Attempts: {attempts}</div>
            <div>
                <Button
                    onClick={startQuiz}
                    disabled={inProgress || attempts === 0}
                >
                    Start Quiz
                </Button>
            </div>
            <div>
                <Button onClick={() => setState(false)} disabled={!inProgress}>
                    Stop Quiz
                </Button>
            </div>
            <div>
                <Button
                    onClick={() => setValue(attempts + 1)}
                    disabled={inProgress}
                >
                    Mulligan
                </Button>
            </div>
        </div>
    );
}
