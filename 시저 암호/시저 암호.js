function solution(s, n) {
    let sArr = [...s];

    sArr.map((val, i, arr) => {
        if (val !== ' ') {
            if (val.charCodeAt() > 64 && val.charCodeAt() < 91) {
                if (val.charCodeAt() + n > 90) {
                    arr[i] = (String.fromCharCode((val.charCodeAt() - 26) + n))
                } else {
                    arr[i] = (String.fromCharCode(val.charCodeAt() + n))
                }
            } else {
                if (val.charCodeAt() + n > 122) {
                    arr[i] = (String.fromCharCode((val.charCodeAt() - 26) + n))
                } else {
                    arr[i] = (String.fromCharCode(val.charCodeAt() + n))
                }
            }
        }
    })

    return sArr.join('');
}

function othersSolution(s, n) {
    var chars = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXY  "
    return s.split('').map(e => chars[chars.indexOf(e) + n]).join('');
}