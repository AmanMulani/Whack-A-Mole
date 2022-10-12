import { HTMLProps } from "../../utils/globalTypes";

export interface BoardProps extends HTMLProps<HTMLDivElement> {
    boardSize: number,
    boardConfiguration: boolean[][]
}