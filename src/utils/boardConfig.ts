import { generateRandomNumber } from "./generateRandomNumber";

export const initialConfig = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
];

export function getNewMoleBoardState(): boolean[][] {

    const row = generateRandomNumber(3);
    const column = generateRandomNumber(3);
    const newMoleBoard: boolean[][] = [];

    initialConfig.forEach((_row, index) => {
        newMoleBoard[index] = _row.slice();
    });

    newMoleBoard[row][column] = true;

    return newMoleBoard;
}