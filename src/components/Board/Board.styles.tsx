import styled from "styled-components";
import backgroundCanvas from '../../assets/backgroundCanvas.jpg'
import { BoardProps } from "./types";

export const Board = styled.div<BoardProps>`
    display: gird;
    height: 40vh;
    width: 60vh;
    background-image: url(${backgroundCanvas});
    grid-template-rows: repeat(${(props) => props.boardSize}, 1fr);
    grid-template-columns: repeat(${(props) => props.boardSize}, 1fr);

    @media (max-width: 500px) {
        width: 80vw
    }

    @media (max-width: 800px) {
        width: 60vw
    }
`