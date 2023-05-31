function solution(n) {
    var answer = 0;

    let jin3 = n.toString(3);
    let strNArr = Array.from(jin3).reverse();
    let reverJin3 = strNArr.reduce(function add(sum, currValue) {
        return sum + currValue;
    });

    let jin10 = parseInt(reverJin3, 3).toString(10);

    answer = jin10;

    return Number(answer);
}