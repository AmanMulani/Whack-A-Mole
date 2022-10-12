import { useReducer } from 'react';
import { WithStyle } from '../../utils/WithStyle';
import { GameSection } from '../GameSection/GameSection';
import { scoreReducer } from '../GameSection/GameSectionReducers';
import { ScoreContext } from '../GameSection/ScoreContext';
import * as Styled from './Container.Styles'

const Component: React.FC = () => {

    const [score, dispatch] = useReducer(scoreReducer, 0);

    return (
        <Styled.Container>
            <ScoreContext.Provider value={{
                score: score,
                updateScore: dispatch
            }} >
                <GameSection />
            </ScoreContext.Provider>
        </Styled.Container>
    );
}

export const Container: React.FC & WithStyle = Object.assign(Component, {Style: Styled.Container});