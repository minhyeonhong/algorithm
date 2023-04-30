function solution(arr) {
    const answer = arr.filter((val, idx, ar) => {
        return val !== ar[idx + 1];
    });

    return answer;
}