function solution(n) {
    let count = 0;

    while (count < 500) {
        if (n == 1) {
            break;
        } else {
            if (n % 2 == 0) {
                n = n / 2;
                count++;
            } else {
                n = (n * 3) + 1;
                count++;
            }
        }
    }

    if (count >= 500) { count = -1 }

    return count;
}