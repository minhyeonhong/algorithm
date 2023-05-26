function solution(arr) {
    let answer = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i !== j) answer.push(arr[i] + arr[j]);
        }
    }

    return [...new Set(answer)].sort((a, b) => { return a - b });
}