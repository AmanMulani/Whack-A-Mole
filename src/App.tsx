import { useReducer } from 'react';
import { Container } from './components/Container/Container';
import { GameSection } from './components/GameSection/GameSection';
import { scoreReducer } from './components/GameSection/GameSectionReducers';
import { ScoreContext } from './components/GameSection/ScoreContext';


const App: React.FC = () => {
    return (
        <Container />
    );
}

export default App;


