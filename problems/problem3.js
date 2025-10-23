function multiplyBy(arr, m) {
    let a = arr
    for (let i in arr) {
        a[i] = arr[i] * m
    }
    return a
}