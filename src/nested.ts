import { type } from "os";
import { Popover } from "react-bootstrap";
import { text } from "stream/consumers";
import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import {
    duplicateQuestion,
    makeBlankQuestion,
    renameQuestion
} from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    let newPublished = [...questions];
    //Makes new list filtering out any Questions that HAVE NOT been published
    newPublished = newPublished.filter(
        (word: Question): boolean => word.published
    );
    return newPublished;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    let nonEmpty = [...questions];
    nonEmpty = nonEmpty.filter(
        (word: Question): boolean =>
            word.body != "" || word.expected != "" || word.options.length != 0
    );
    return nonEmpty;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const newQuestion = questions.find(
        (word: Question): boolean => word.id === id
    );
    if (newQuestion) {
        return newQuestion;
    } else {
        return null;
    }
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const noIds = questions.filter((word: Question): boolean => word.id != id);
    return noIds;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const newNames = questions.map((word: Question): string => word.name);
    return newNames;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const totalPoints = questions.reduce(
        (currentSum: number, question: Question) =>
            currentSum + question.points,
        0
    );
    return totalPoints;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const totalPublish = questions.filter(
        (question: Question): boolean => question.published
    );
    const publishedSum = totalPublish.reduce(
        (sum: number, question: Question) => sum + question.points,
        0
    );
    return publishedSum;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const newFile = questions
        .map(
            (question: Question): string =>
                `${question.id},${question.name},${question.options.length},${question.points},${question.published}`
        )
        .join("\n");
    return "id,name,options,points,published" + "\n" + newFile;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const newAnswers = questions.map(
        (question: Question): Answer => ({
            questionId: question.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    return newAnswers;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const newPublished = questions.map(
        (question: Question): Question => ({ ...question, published: true })
    );
    return newPublished;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    const ifTypeMC = questions.every(
        (question: Question): boolean =>
            question.type === "multiple_choice_question"
    );
    const ifTypeS = questions.every(
        (question: Question): boolean =>
            question.type === "short_answer_question"
    );
    if (ifTypeMC || ifTypeS) {
        return true;
    } else {
        return false;
    }
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const newQuestions = [...questions, makeBlankQuestion(id, name, type)];
    return newQuestions;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const possTargetId: number = questions.findIndex(
        (question: Question): boolean => question.id === targetId
    );

    const newQuestions = [...questions];
    newQuestions[possTargetId] = renameQuestion(
        newQuestions[possTargetId],
        newName
    );

    return newQuestions;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const newChange = questions.map(
        (question: Question): Question => ({ ...question })
    );

    const possTargetId = newChange.map(
        (question: Question): Question =>
            question.id === targetId
                ? { ...question, type: newQuestionType }
                : question
    );

    const ifNotMc = possTargetId.map(
        (question: Question): Question =>
            question.id === targetId &&
            newQuestionType != "multiple_choice_question"
                ? { ...question, options: [] }
                : question
    );
    return ifNotMc;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    const deepCopy = questions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options]
        })
    );
    const index = deepCopy.findIndex(
        (question: Question): boolean => question.id == targetId
    );

    const optionArr = deepCopy[index].options;
    let optionArr2: string[] = [];
    if (targetOptionIndex == -1) {
        optionArr2 = [...optionArr, newOption];
    } else {
        optionArr.splice(targetOptionIndex, 1, newOption);
        optionArr2 = optionArr;
    }
    deepCopy[index].options = optionArr2;
    return deepCopy;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const duplication = [...questions];
    const target: number = duplication.findIndex(
        (question: Question): boolean => question.id === targetId
    );
    duplication.splice(
        1 + target,
        0,
        duplicateQuestion(newId, questions[target])
    );
    return duplication;
}
