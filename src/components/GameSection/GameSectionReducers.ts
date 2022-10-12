

export const scoreReducer = (state: number, action: 'hit' | 'miss' | 'reset') => {
    switch(action) {
        case 'hit':
            return state + 1;
        case 'miss':
            return state === 0 ? state : state - 1;
        case 'reset':
            return 0;
        default:
            return state;
    }
}