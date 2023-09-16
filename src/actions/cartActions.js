export const addToCart = (prodObj) => {
    return {
        type: 'ADD_ITEMS',
        items: prodObj
    }
}

export const addImages = (imageArr) => {
    return {
        type: 'ADD_IMAGES',
        imgInfo: imageArr
    }
}

export const itemCount = (count = 0) => {
    return {
        type: 'ITEM_COUNT',
        count: count
    }
}

export const removeItem = (itemsArr, id) => {
    return {
        type: 'REMOVE_ITEM',
        items: itemsArr.filter((itemObj) => id !== itemObj.id)
    }
}
