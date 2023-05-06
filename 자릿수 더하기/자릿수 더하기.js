function solution(n) {
    let strNs = Array.from(n.toString());

    return strNs.reduce((prev, curr) => Number(prev) + Number(curr), 0);
}