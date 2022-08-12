function DashInsert(str) {
    const num = str.toString();
    let string = [num[0]];

    for (let i = 1; i < num.length; i++) {
        if (num[i-1] % 2 == 1 && num[i] % 2 == 1) {
            string.push('-', num[i]);
        }
        else {
            string.push(num[i]);
        }
    }
    return string.join("");
}
