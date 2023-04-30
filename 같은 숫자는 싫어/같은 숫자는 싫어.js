function solution1(arr) {
    const answer = arr.map((val, idx, ar) => {
        return val !== ar[idx + 1];
    });

    return answer;
}