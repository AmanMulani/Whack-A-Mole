import { HTMLProps } from "../../utils/globalTypes"

export interface BoardTileProps extends HTMLProps<HTMLDivElement> {
    column: number,
    row: number,
    isMolePresent: boolean
}

export interface MoleComponentProps extends HTMLProps<HTMLDivElement> {
    isVisible: boolean
}

export interface HoleComponentProps extends HTMLProps<HTMLDivElement> {
    
}