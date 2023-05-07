function solution(n) {
    let strNs = Array.from(n.toString()).reverse();

    return strNs.map((i) => Number(i));
}