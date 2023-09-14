
export const cartReducer = (state = { items: 0, imgArrProps: [], fullsizeImage: '' }, action) => {
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
        // case 'ADD_FULLSIZE_IMAGE':
        //     return {
        //         ...state,
        //         fullsizeImage: action.fullImg
        //     }
        default:
            return {
                ...state
            }
    }
}