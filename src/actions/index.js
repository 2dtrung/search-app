export const changeTitle = (title) => {
    return {
        type:"GET_TITLE",
        payload: title
    };
};

export const getImage = (images) => {
    return {
        type: "GET_IMAGES",
        payload: images
    }
}
export const getTerm = (term) => {
    return {
        type: "GET_TERM",
        payload: term
    }
}