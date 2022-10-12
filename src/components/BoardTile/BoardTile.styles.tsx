import styled from "styled-components";
import { BoardTileProps, HoleComponentProps, MoleComponentProps } from "./types";


export const BoardTile = styled.div<BoardTileProps>`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: 20px 10px;
    position: relative;
`


export const MoleComponent = styled.div<MoleComponentProps>`
    display: ${(props) => props.isVisible ? 'flex' : 'none'};
    margin: 0;
    border-radius: 70%;
    justify-content: flex-end;
    align-items: center;
`

export const HoleComponent = styled.div<HoleComponentProps>`
    background-color: white;
    height: 15%;
    width: 60%;
    border-radius: 50%;
`

export const MoleImage = styled.img`
    max-width: 50px;
    max-height: 50px;
    object-fit: contain;
    margin: 0;

    @media (max-width: 400px) {
        max-width: 30px;
        max-height: 30px;
    }
`