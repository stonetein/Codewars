function solution(string) {
    var arr = Array.from(string)
    var Bkarr = []
    for (var i = 0; i < arr.length; i++) {
        (arr[i] >= 'A' && arr[i] <= 'Z' ? Bkarr.push(' ' + arr[i]) : Bkarr.push(arr[i]))
    }
    return String(Bkarr.join(''))
}

console.log(solution('camelCasingTest'))