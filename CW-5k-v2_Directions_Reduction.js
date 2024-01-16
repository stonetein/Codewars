/*
    step1
    框架
    題目：幫助一個男人走出酷熱的沙漠，題目會給他指示前往另一個
    方向是「北」、「南」、「西」、「東」。 顯然「北」和「南」是相反的，「西」和「東」也是相反的。
    
    step2
    遇到，刪除的關鍵方向，排列組合
    NS、SN、WE、EW
    實際測試，在判斷第二個條件時，卡住無法給出可以刪除保留0位置並判除1,2位置條件
    後來看了結果，好像慢慢找出規率, 改用計數來判斷出現次數, 如果
    N > S (N = N -S ，S -= S)
    S > N (S = S -N ，N -= N)
    W E 也是以上的邏輯推理
    驗證

    step3
    在Sample Tests 可以pass，但random test 就fail
    排序錯誤，需要在解一下這個bug

    step4
    最後還是卡關，差陣列會最後多一個undfinded
    一直使用debugger搞種了splice的原理，與每次檢查完，可以去改變i的值
    讓它都重頭開始算，學到非常多
*/

function dirReduc(arr) {
    for (var i = 0; i < arr.length; i++) {
        if
            (arr[i] === "NORTH" && arr[i + 1] === "SOUTH" ||
            arr[i] === "SOUTH" && arr[i + 1] === "NORTH" ||
            arr[i] === "WEST" && arr[i + 1] === "EAST" ||
            arr[i] === "EAST" && arr[i + 1] === "WEST") {
            arr.splice(i, 2)
            i = -1
        } else {
            continue
        }
    }
    return arr
}
console.log(dirReduc(["EAST", "EAST", "WEST", "NORTH", "WEST", "EAST", "EAST", "SOUTH", "NORTH", "WEST"]))
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "SOUTH", "NORTH", "WEST", "NORTH", "WEST", "EAST", "NORTH", "SOUTH", "EAST", "WEST"]))
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]))