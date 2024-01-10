/*

要解釋一個以10為基數的自戀數字，可以分為以下步驟：

將數字轉換為字串，以便處理每個位數。
確定該數字的位數。
計算每個位數的次方和。
檢查計算出的次方和是否等於原始數字。
如果最後計算出的次方和等於原始數字，則該數字為以10為基數的自戀數字；反之則不是。

true和false的條件：

True（是自戀數）條件：計算出的次方和等於原始數字。
False（不是自戀數）條件：計算出的次方和不等於原始數字。
舉例來說，對於數字153：

1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153，因此是自戀數，滿足True條件。
如果另一個數字計算出的次方和不等於原始數字，則不滿足True條件，因此不是自戀數。


*/
function narcissistic(value) {
    var n = Array.from(value.toString())
    var result = []
    for (var i = 0; i < n.length; i++) {
        result.push(n[i] ** n.length)
    }
    var sum = 0
    for (var i = 0; i < result.length; i++) {
        sum += result[i]
    }
    return (value === sum ? true : false)
}

console.log(narcissistic(487))