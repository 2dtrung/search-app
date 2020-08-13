export const titleReducer = (state = [] , actions) => {
    switch (actions.type) {
        case "GET_TITLE":
            return actions.payload;
        default:
            return state;
    }
}