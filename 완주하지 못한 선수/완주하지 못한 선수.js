function solution(participant, completion) {
    let answer = '';

    if (completion.length != 0) {
        participant = participant.sort();
        completion = completion.sort();

        for (let i = 0; i < participant.length; i++) {
            if (participant[i] !== completion[i]) {
                answer = participant[i];
                break;
            }
        }

    } else {
        answer = participant[0];
    }


    return answer;
}