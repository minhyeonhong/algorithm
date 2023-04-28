function solustion(a, b) {
    let setDate = new Date('2016-' + a + '-' + b);
    let dayArr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    return dayArr[setDate.getDay()];
}