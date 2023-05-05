function solution(s) {
    let strs = s.toUpperCase().split(' ');

    for (let i = 0; i < strs.length; i++) {
        for (let j = 0; j < strs[i].length; j++) {
            if (j % 2 !== 0) strs[i] = strs[i].replaceAt(j, strs[i].substring(j, (j + 1)).toLowerCase());
        }
    }

    return strs.join(' ');
}

String.prototype.replaceAt = function (index, character) {
    return this.substring(0, index) + character + this.substring(index + character.length);
}