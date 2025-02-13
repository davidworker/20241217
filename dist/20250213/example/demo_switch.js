function numberToChinese(num) {
    if (num < 0 || num > 99) {
        return "超出範圍";
    }

    const ones = num % 10;
    const tens = Math.floor(num / 10);

    let result = "";

    // 處理十位數
    switch (tens) {
        case 0:
            break;
        case 1:
            result += "十";
            break;
        case 2:
            result += "二十";
            break;
        case 3:
            result += "三十";
            break;
        case 4:
            result += "四十";
            break;
        case 5:
            result += "五十";
            break;
        case 6:
            result += "六十";
            break;
        case 7:
            result += "七十";
            break;
        case 8:
            result += "八十";
            break;
        case 9:
            result += "九十";
            break;
    }

    // 處理個位數
    if (ones !== 0 || num === 0) {
        switch (ones) {
            case 0:
                result = "零";
                break;
            case 1:
                result += "一";
                break;
            case 2:
                result += "二";
                break;
            case 3:
                result += "三";
                break;
            case 4:
                result += "四";
                break;
            case 5:
                result += "五";
                break;
            case 6:
                result += "六";
                break;
            case 7:
                result += "七";
                break;
            case 8:
                result += "八";
                break;
            case 9:
                result += "九";
                break;
        }
    }

    return result;
}

// 測試用例
console.log(numberToChinese(0)); // 零
console.log(numberToChinese(10)); // 十
console.log(numberToChinese(15)); // 十五
console.log(numberToChinese(20)); // 二十
console.log(numberToChinese(35)); // 三十五
console.log(numberToChinese(99)); // 九十九
