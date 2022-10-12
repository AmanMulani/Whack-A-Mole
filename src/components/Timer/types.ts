import { HTMLProps } from "../../utils/globalTypes";

export interface TimerProps extends HTMLProps<HTMLDivElement> {
    minutes: number,
    seconds: number,
    isActive: boolean
}