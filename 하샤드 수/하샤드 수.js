function solution(x) {
    let answer = true;
    const xs = Array.from(x.toString()).map((i) => Number(i));

    const sum = xs.reduce(function add(prev, curr) {
        return prev + curr;
    }, 0);

    if (x % sum != 0) {
        answer = false;
    }

    return answer;
}