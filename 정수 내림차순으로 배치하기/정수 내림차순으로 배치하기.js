function solution(n) {
    let strNs = Array.from(n.toString()).sort().reverse();

    let answer = strNs.reduce((prev, curr) => prev + curr);

    return Number(answer);
}