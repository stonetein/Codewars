
function digitize(n) {
    var str = n.toString()
    var sort = []
    for (var i = str.length - 1; i >= 0; i = i - 1) {
        sort.push(Number(str[i]))
    }
    return sort
}
console.log(digitize(0))