import { useContext } from "react";
import { WithStyle } from "../../utils/WithStyle";
import { ScoreContext } from "../GameSection/ScoreContext";
import * as Styled from "./BoardTile.styles";
import { BoardTileProps } from "./types";
import moleImage from '../../assets/moleImage.png';

export const Component: React.FC<BoardTileProps> = (props: BoardTileProps) => {

    const {updateScore} = useContext(ScoreContext);

    const onTileClick = () => {
        if(props.isMolePresent) {
            updateScore('hit');
        } else {
            updateScore('miss');
        }
    }

    return (
        <Styled.BoardTile {...props} onClick={onTileClick}> 
            <Styled.MoleComponent isVisible={props.isMolePresent}>
                <Styled.MoleImage src={moleImage} alt="Mole"></Styled.MoleImage>    
            </Styled.MoleComponent>
            <Styled.HoleComponent /> 
        </Styled.BoardTile>
    );
}

export const BoardTile: React.FC<BoardTileProps> & WithStyle = Object.assign(Component, {Style: Styled.BoardTile})

