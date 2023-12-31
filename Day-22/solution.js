function compareObjects(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false
    }
    for (let key in obj1) {
        if (typeof obj1[key] !== 'object' && typeof obj2[key] !== 'object') {
            if (obj1[key] !== obj2[key]) {
                return false
            }
        }
        else return compareObjects(obj1[key], obj2[key])
    }
    return true
}d