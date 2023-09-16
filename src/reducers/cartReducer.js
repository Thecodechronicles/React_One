const stateObj = {
    items: 0,
    imgArrProps: [],
    fullsizeImage: ''
}

export const cartReducer = (state = stateObj, action) => {
    switch (action.type) {
        case 'ADD_ITEMS':
            return {
                ...state,
                items: action.items
            }
        case 'ADD_IMAGES':
            return {
                ...state,
                imgArrProps: action.imgInfo
            }
        default:
            return {
                ...state
            }
    }
}