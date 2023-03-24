import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const COLORS = [
        "red",
        "orange",
        "green",
        "purple",
        "blue",
        "yellow",
        "black",
        "white"
    ];

    const [color, setColor] = useState<string>("");

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((color: string) => (
                <Form.Check
                    inline
                    key={color}
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color-check"
                    label={color}
                    value={color}
                    checked={color === "happy"}
                    background-color={color}
                />
            ))}
            <div>You have chosen: </div>
            <span data-testid="colored-box" style={{ backgroundColor: color }}>
                {" "}
                {color}
            </span>
        </div>
    );
}
