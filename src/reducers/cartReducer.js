const stateObj = {
    items: [],
    imgArrProps: [],
    count: 0
    // fullsizeImage: ''
}

export const cartReducer = (state = stateObj, action) => {
    switch (action.type) {
        case 'ADD_ITEMS':
            return {
                ...state,
                items: [
                    ...state.items,
                    action.items
                ]
            }
        case 'ADD_IMAGES':
            return {
                ...state,
                imgArrProps: action.imgInfo
            }
        case 'ITEM_COUNT':
            return {
                ...state,
                count: action.count
            }
        case 'REMOVE_ITEM':
            return {
                ...state,
                items: action.items
            }
        default:
            return {
                ...state
            }
    }
}