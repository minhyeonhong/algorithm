function solution(s) {
    let numKeyVal = {
        'zero': 0,
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9
    };

    for (const key in numKeyVal) {
        if (s.indexOf(key) != -1) {
            s = s.replaceAll(key, numKeyVal[key].toString())
        }

    }
    return Number(s);
}