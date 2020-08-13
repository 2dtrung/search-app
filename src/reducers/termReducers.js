export const termReducer = (state = "" , actions) => {
    switch (actions.type) {
        case "GET_TERM":
            return actions.payload;
        default:
            return state;
    }
}