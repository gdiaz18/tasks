import { workerData } from "worker_threads";

/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let newArray: number[] = [];
    if (numbers.length === 1) {
        newArray = [numbers[0], numbers[0]];
    } else if (numbers.length >= 2) {
        newArray = [numbers[0], numbers[numbers.length - 1]];
    }
    return newArray;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const tripled = numbers.map((num: number): number => num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let strings = numbers.map((word: string): number => Number(word));
    strings = strings.map((num: number): number =>
        isNaN(num) ? (num = 0) : num
    );
    return strings;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const noSymbol = amounts.map((amount: string): string =>
        amount.includes("$")
            ? (amount = amount.slice(1, amount.length))
            : amount
    );

    const toNumber = noSymbol.map((amount: string): number => Number(amount));

    const answer = toNumber.map((amount: number): number =>
        isNaN(amount) ? (amount = 0) : amount
    );
    return answer;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let newExclamation = messages.filter(
        (message: string): boolean => !message.includes("?")
    );

    newExclamation = newExclamation.map((message: string): string =>
        message.includes("!") ? message.toUpperCase() : message
    );

    return newExclamation;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let total = 0;
    words.map((word: string): number =>
        word.length < 4 ? (total += 1) : (total += 0)
    );
    return total;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let result = false;
    if (colors.length === 0) {
        result = true;
    }
    colors.every((color: string): boolean =>
        color === "red" || color === "blue" || color == "green"
            ? (result = true)
            : (result = false)
    );
    return result;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    } else {
        const sum = addends.reduce((a, b) => a + b, 0);
        return (
            sum +
            "=" +
            addends.map((num: number): string => num.toString()).join("+")
        );
    }
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const copyValues = [...values];

    const isNeg = values.findIndex((negValue: number): boolean => negValue < 0);

    if (isNeg === -1) {
        const notNeg = values.reduce(
            (currentTotal: number, currentValue: number) =>
                currentTotal + currentValue,
            0
        );

        copyValues.splice(values.length, 0, notNeg);
        return copyValues;
    } else if (isNeg === 0) {
        copyValues.splice(isNeg + 1, 0, 0);
        return copyValues;
    } else {
        const negative = values.reduceRight(
            (currentTotal: number, currentValue: number) =>
                currentTotal + currentValue,
            values[isNeg]
        );
        copyValues.splice(isNeg + 1, 0, negative);
        return copyValues;
    }
}
