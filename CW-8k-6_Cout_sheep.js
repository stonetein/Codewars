function countSheeps(sheep) {
    let count = 0
    for (let i = 0; i <= sheep.length; i++) {
        console.log(typeof [sheep[i]])
        if (sheep[i] === true) {
            count += 1
        }
    }
    return count
}
console.log(countSheeps([true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true]))