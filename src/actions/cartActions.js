
export const addToCart = (value) => {
    return {
        type: 'ADD_ITEMS',
        items: value
    }
}

export const addImages = (imageArr) => {
    return {
        type: 'ADD_IMAGES',
        thumbnails: imageArr
    }
}