function solution(answers) {
    var answer = [];
    //수포자 답안지 형식
    let supo1 = [1, 2, 3, 4, 5];
    let supo2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let supoAnswerCount1 = 0;
    let supoAnswerCount2 = 0;
    let supoAnswerCount3 = 0;

    //정답지 갯수
    let answersLength = answers.length;

    supo1 = supoAnswers(supo1, answersLength);
    supo2 = supoAnswers(supo2, answersLength);
    supo3 = supoAnswers(supo3, answersLength);

    //채점
    answers.map((val, i) => {
        if (supo1[i] == val) {
            supoAnswerCount1++;
        }
        if (supo2[i] == val) {
            supoAnswerCount2++;
        }
        if (supo3[i] == val) {
            supoAnswerCount3++;
        }
    })

    //채점 배열
    let answerCountArr = [supoAnswerCount1, supoAnswerCount2, supoAnswerCount3];
    //1등 갯수
    const arrMax = Math.max(...answerCountArr);
    //걀과
    let result = [];

    answerCountArr.map((val, i) => {
        if (val == arrMax) {
            result.push(i + 1);
        }
    })

    return result;
}

//정답지만큼 수포자 답안지 만들기 함수
let supoAnswers = (supo, answersLength) => {
    let quotient = parseInt(answersLength / supo.length);
    let remainder = answersLength % supo.length;
    let result = [];

    for (let i = 0; i < quotient; i++) {
        result = result.concat(supo);

    }

    if (remainder != 0) {
        for (let i = 0; i < remainder; i++) {
            result = result.concat(supo[i]);
        }
    }

    return result;
}