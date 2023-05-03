function solution(s) {
    let sArr = [...s];
    let descArr = sArr.sort((a, b) => {
        return b.localeCompare(a);
    })

    let upperS = [];
    let lowS = [];

    descArr.map((val, i) => {
        if (val.toUpperCase() == val) {
            upperS.push(val);
        } else {
            lowS.push(val);
        }
    })

    return lowS.concat(upperS).join('');
}

function othersSolution(s) {
    return s.split("").sort((a, b) => a < b ? 1 : -1).join("");
}