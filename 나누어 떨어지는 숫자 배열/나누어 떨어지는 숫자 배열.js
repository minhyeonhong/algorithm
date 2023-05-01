function solution(arr, divisor) {
    arr.sort((comp1, comp2) => comp1 - comp2);
    let answer = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % divisor == 0) {
            answer.push(arr[i]);
        }
    }

    if (answer.length == 0) {
        answer.push(-1);
    }

    return answer;
}