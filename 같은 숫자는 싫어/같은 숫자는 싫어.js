function solution(arr) {
    const answer = arr.filter((val, idx, ar) => {
        return val !== ar[idx + 1];
    });

    return answer;
}

function solution2(arr) {
    return arr.filter((val, idx) => val !== arr[idx + 1]);
}