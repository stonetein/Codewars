function invert(array) {
    var result = []
    for (var i = 0; i < array.length; i++) {
        if (array[i] === 0 ? result.push(0) : result.push(array[i] * -1)) {
        } else {
            result.push()
        }
    }
    return result
}

console.log(invert([1, 2, 3, 4, 5]))