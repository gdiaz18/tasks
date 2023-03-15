import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Birthday 🎁"
    | "Christmas 🎄"
    | "4thofJuly 🎆"
    | "Halloween 🎃"
    | "Thanksgiving 🦃";

const holidayAlph: Record<Holiday, Holiday> = {
    "Birthday 🎁": "Christmas 🎄",
    "Christmas 🎄": "4thofJuly 🎆",
    "4thofJuly 🎆": "Halloween 🎃",
    "Halloween 🎃": "Thanksgiving 🦃",
    "Thanksgiving 🦃": "Birthday 🎁"
};

const holidayYear: Record<Holiday, Holiday> = {
    "Birthday 🎁": "4thofJuly 🎆",
    "4thofJuly 🎆": "Halloween 🎃",
    "Halloween 🎃": "Thanksgiving 🦃",
    "Thanksgiving 🦃": "Christmas 🎄",
    "Christmas 🎄": "Birthday 🎁"
};

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("Birthday 🎁");

    function changeByAlphabet(): void {
        const newHoliday = holidayAlph[holiday];
        setHoliday(newHoliday);
    }

    function changeByYear(): void {
        const newHoliday = holidayYear[holiday];
        setHoliday(newHoliday);
    }

    return (
        <div>
            <span>
                <Button onClick={changeByAlphabet}>Advance By Alphabet</Button>
            </span>
            <div>Holiday: {holiday}</div>
            <span>
                <Button onClick={changeByYear}>Advance by Year</Button>
            </span>
        </div>
    );
}
