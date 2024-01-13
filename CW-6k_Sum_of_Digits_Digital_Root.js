/*
    step1
    框架
    取得數字的每一個值，sum = i，加完後的sum使用判斷式如果是兩位數以上
    再做一次加總，一直做到結果為個位數

    step2
    各個功能都可以完成，但在寫code時就會很想把它們全部加在一起，很容易卡住，有bug
    1.數字轉換為數字array
    2.數字加總 for loop (while)
    3.判斷sum如果>=10 在做一次數字加總for loop (while)
    4.直到條件不成立回傳

    step3
    

    step4
    可以在reactor，讓程式碼更好讀，較簡單懂
*/
function sumArr(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

//------revers Array
function reArray(n) {
    let sNum = n.toString()
    let nArr = Array.from(sNum).map(Number)
    return nArr
}


function digitalRoot(n) {
    let sumNum = reArray(n)
    let FinNum = sumArr(sumNum)
    //return FinNum
    while (FinNum >= 10) {
        sumNum = reArray(FinNum)
        FinNum = sumArr(sumNum)
    }
    return FinNum
}
console.log(digitalRoot(443293))