export const imageReducer = (state = [] , actions) => {
    switch (actions.type) {
        case "GET_IMAGES":
            return actions.payload;
        default:
            return state;
    }
}