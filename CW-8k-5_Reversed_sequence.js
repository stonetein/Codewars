const reverseSeq = n => {
    const result = []
    for (let i = n; i >= 1; i = i - 1) {
        result.push(i)
    }
    return result
}