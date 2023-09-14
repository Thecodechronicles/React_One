
export const cartReducer = (state = { items: '', imgArr: [] }, action) => {
    switch (action.type) {
        case 'ADD_ITEMS':
            return {
                ...state,
                items: action.items
            }
        case 'ADD_IMAGES':
            return {
                ...state,
                imgArr: action.thumbnails
            }
        default:
            return {
                ...state
            }
    }
}