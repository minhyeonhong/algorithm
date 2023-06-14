function solution(new_id) {
    let addStr = '';
    //step1
    new_id = new_id.toLowerCase();
    //step2
    new_id = new_id.replace(/[^0-9a-zA-Z-_.]/g, '');
    //step3
    new_id = new_id.replace(/[.]+/g, '.');
    //step4
    new_id = new_id.replace(/^[.]|[.]$/g, '');
    //step5
    new_id = new_id.length == 0 ? new_id.replace('', 'a') : new_id;
    //step6
    new_id = new_id.length > 15 ? new_id.substring(0, 15).replace(/[.]$/g, '') : new_id;
    //step7
    addStr = new_id.length <= 2 ? new_id.substring(new_id.length - 1, new_id.length) : '';
    if (addStr !== '') {
        while (new_id.length < 3) {
            new_id += addStr;
        }
    }

    return new_id;
}