// 基本 if-else 範例
function basicIfExample() {
    const score = 85;

    if (score >= 90) {
        console.log("優秀！");
    } else if (score >= 80) {
        console.log("良好！");
    } else if (score >= 70) {
        console.log("及格");
    } else {
        console.log("需要加油");
    }
}

// 巢狀 if 範例
function nestedIfExample() {
    const age = 25;
    const hasLicense = true;

    if (age >= 18) {
        if (hasLicense) {
            console.log("您可以開車");
        } else {
            console.log("您需要先考駕照");
        }
    } else {
        console.log("您年齡不足，無法開車");
    }
}

// 執行範例
basicIfExample();
nestedIfExample();
