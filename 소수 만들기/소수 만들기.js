//조합
const getCombinations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]);
    // n개중에서 1개 선택할 때(nC1), 바로 모든 배열의 원소 return

    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1);
        // 해당하는 fixed를 제외한 나머지 뒤
        const combinations = getCombinations(rest, selectNumber - 1);
        // 나머지에 대해서 조합을 구한다.
        const attached = combinations.map((el) => [fixed, ...el]);
        //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
        results.push(...attached);
        // 배열 spread syntax 로 모두다 push
    });

    return results; // 결과 담긴 results return
}

//소수 검사
const isPrime = (n) => {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

function solution(nums) {
    var answer = 0;

    //조합 배열 만들기
    let combinationArr = getCombinations(nums, 3);
    let totalArr = [];

    //조합 배열 더한 배열 만들기
    combinationArr.map((val) => {
        totalArr.push(val.reduce((sum, currVal) => { return sum + currVal }));
    })

    //소수 검사
    totalArr.map((val) => {
        if (isPrime(val)) {
            answer++;
        }
    })

    return answer;
}