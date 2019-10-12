const initialState = {
    activeIndex: null,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_ACTIVE_INDEX':
            console.log('Updating active index..');
            return {
                ...state,
                activeIndex: action.payload
            };
        default:
            return state;
    }
}
