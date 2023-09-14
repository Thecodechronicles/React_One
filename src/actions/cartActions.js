
export const addToCart = (value) => {
    return {
        type: 'ADD_ITEMS',
        items: value
    }
}

export const addImages = (imageArr) => {
    return {
        type: 'ADD_IMAGES',
        imgInfo: imageArr
    }
}

// export const addFullsizeImage = (fullSizeImage) => {
//     return {
//         type: 'ADD_FULLSIZE_IMAGE',
//         fullImg: fullSizeImage
//     }
// }