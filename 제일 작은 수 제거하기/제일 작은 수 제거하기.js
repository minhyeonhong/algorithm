function solution(arr) {

    const min = Math.min.apply(null, arr);

    const findMin = arr.indexOf(min);

    arr.splice(findMin, 1);

    return arr.length < 0 ? arr[0] = -1 : arr;
}