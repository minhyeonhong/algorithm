function solution1(n) {
    let answer = '';
    let r = '수박';
    let b = 0;

    if (n % 2 != 0) {
        b = 1;
    }

    for (let i = 0; i < (parseInt(n / 2)); i++) {
        answer = answer + r;
    }

    if (b == 1) {
        answer = answer + '수'
    }

    return answer;
}

function solution2(n) {
    let answer = '수박'.repeat(10000);
    return answer.substring(0, n);
}