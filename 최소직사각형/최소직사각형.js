function solution(sizes) {
    let widthArr = [];
    let heightArr = [];

    sizes.map((value, i) => {
        if (value[0] < value[1]) {
            widthArr[i] = value[1];
            heightArr[i] = value[0];
        } else {
            widthArr[i] = value[0];
            heightArr[i] = value[1];
        }

    })

    let maxW = Math.max(...widthArr);
    let maxH = Math.max(...heightArr);

    return maxW * maxH;
}