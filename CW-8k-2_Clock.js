function past(h, m, s) {
    var mlisecs = 0
    if (h === 0) {
        return mlisecs = ((m * 60) + s) * 1000
    } else if (m === 0) {
        return mlisecs = ((h * Math.pow(60, 2)) + s) * 1000
    }
    return ((h * Math.pow(60, 2)) + (m * 60) + s) * 1000
}

// 先x%後加減，超快速寫法
function past(h, m, s) {
    return ((h * 3600) + (m * 60) + s) * 1000;
}
console.log(past(1, 0, 0))