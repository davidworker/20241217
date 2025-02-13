for (let i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }
    console.log(i);
}

console.log("迴圈結束了!!!");

let num = 0;
while (num < 10) {
    if (num == 5) {
        break;
    }
    console.log(num);
    num++;
}

console.log("迴圈結束了!!!");

switch (num) {
    case 0:
        console.log("num 是 0");
        break;
    case 1:
        console.log("num 是 1");
        break;
}
