function solution(n) {

    let msqrtN = Math.sqrt(n)

    return Number.isInteger(msqrtN) === false ? -1 : Math.pow(msqrtN + 1, 2)

}