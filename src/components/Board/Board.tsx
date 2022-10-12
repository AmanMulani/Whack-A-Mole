import React from "react";
import { getUniqueID } from "../../utils/getUniqueId";
import { WithStyle } from "../../utils/WithStyle";
import { BoardTile } from "../BoardTile/BoardTile";
import * as Styled from "./Board.styles";
import { BoardProps } from "./types";

const Component: React.FC<BoardProps> = ({boardSize, boardConfiguration}) => {

    const _boardTilesList: Array<JSX.Element> = [];
    boardConfiguration.forEach((_row: boolean[], index: number) => {
        _row.forEach((isPresent: boolean, idx: number) => {
            _boardTilesList.push(
                <BoardTile key={getUniqueID()} row = {index} column={idx} isMolePresent={isPresent} />
            );
        })
    });

    return (
        <div>
            <Styled.Board style={{"display": "grid"}} boardSize={boardSize} boardConfiguration={boardConfiguration}> 
                {
                    _boardTilesList.map((tile) => {
                        return tile;
                    })
                }
            </Styled.Board>
        </div>
    );
} 


export const Board: React.FC<BoardProps> & WithStyle = Object.assign(Component, {Style : Styled.Board})