function solution(lottos, win_nums) {
    var answer = [];
    let zeroCount = 0;
    let winCount = 0;

    lottos.map((lottoVal) => {
        if (lottoVal == 0) {
            zeroCount++;
        } else {
            win_nums.map((win_numVal) => {
                if (win_numVal == lottoVal) {
                    winCount++;
                }

            })
        }
    })

    answer[1] = getLank(winCount);

    if (zeroCount == 0) {
        answer[0] = getLank(winCount);
    } else if (zeroCount > 0 && zeroCount < 6) {
        answer[0] = getLank(zeroCount + winCount);
    } else if (zeroCount == 6) {
        answer[0] = getLank(zeroCount);
    }

    return answer;
}

let getLank = (count) => {
    let result = 0;
    switch (count) {
        case 6:  //모두일치
            result = 1;
            break;
        case 5:
            result = 2;
            break;
        case 4:
            result = 3;
            break;
        case 3:
            result = 4;
            break;
        case 2:
            result = 5;
            break;
        default:
            result = 6;
            break;
    }
    return result;
}