function getCount(str) {
    var arr = Array.from(str)
    var count = 0
    const Vowel = ['a', 'e', 'i', 'o', 'u']
    for (var i = 0; i <= arr.length; i++) {
        if (Vowel.includes(arr[i]))
            count += 1
    }
    return count
}


console.log(getCount("abracadaoia"))