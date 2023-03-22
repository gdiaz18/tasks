import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
//const DEFAULT_COLOR_INDEX = 0;

interface colorProps {
    setColorIndex: (colorIndex: number) => void;
    colorIndex: number;
}

function ChangeColor({ setColorIndex }: colorProps): JSX.Element {
    return (
        <Button onClick={() => setColorIndex(1 % COLORS.length)}>
            Next Color
        </Button>
    );
}

function ColorPreview({ colorIndex }: colorProps): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[colorIndex % COLORS.length],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(0);
    const newColor = () => setColorIndex(colorIndex + 1);
    return (
        <div>
            <h3>Colored Box</h3>
            <span>
                The current color is: {COLORS[colorIndex % COLORS.length]}
            </span>
            <div>
                <ChangeColor
                    setColorIndex={newColor}
                    colorIndex={colorIndex}
                ></ChangeColor>
                <ColorPreview
                    setColorIndex={newColor}
                    colorIndex={colorIndex}
                ></ColorPreview>
            </div>
        </div>
    );
}
