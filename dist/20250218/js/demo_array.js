// let num1 = 10;
// let num2 = 20;
// let num3 = 30;
// let num4 = 40;
// let num5 = 50;

/**
 * 宣告陣列
 * 陣列的索引值從 0 開始
 * 陣列的長度是陣列的索引值 + 1
 * 陣列的元素可以是任何型別 (因為 javascript 是弱型別的語言)
 * 通常陣列的變數名稱會以複數命名
 */
let nums = [10, 20, 30, 40, 50, "a", "b", "c", "d", "e", "f"];
let max = nums.length;

console.log(nums);
console.log(max);
console.log(`index: 2 的值: ${nums[2]}`);

let fruits = ["蘋果"];
console.log(fruits);

/**
 * 將元素加入陣列的最後面
 */
fruits.push("香蕉");
console.log(fruits);

/**
 * 將元素加入陣列的最前面
 */
fruits.unshift("西瓜");
console.log(fruits);

/**
 * 將元素從陣列的後面移除
 */
let lastFruit = fruits.pop();
console.log(fruits);
console.log(`最後一個元素: ${lastFruit}`);

/**
 * 將元素從陣列的最前面移除
 */
let firstFruit = fruits.shift();
console.log(fruits);
console.log(`第一個元素: ${firstFruit}`);

console.log("--------------------------------");
let score = [60, 50, 70, 80, 90];

// let scoreMax = score.length;
// for (let i = 0; i < scoreMax; i++) {
//     score[i] = score[i] + 10;
// }

// console.log(score);

/**
 * map(callback) 會將陣列的每一個元素傳入，並回傳一個新的陣列
 * callback = function
 * 原本陣列不會改變
 */
let addScore = score.map(function (item, index, array) {
    console.log(item, index, array);
    return item + 10;
});

console.log("原本的陣列");
console.log(score);
console.log("新的陣列");
console.log(addScore);

/**
 * 我要找出不及格的分數有哪些
 */

// let scoreMax = score.length;
// let loseItems = [];
// for (let i = 0; i < scoreMax; i++) {
//     if (score[i] < 60) {
//         loseItems.push(score[i]);
//     }
// }

// console.log("不及格的分數");
// console.log(loseItems);

/**
 * filter(callback) 會將陣列的每一個元素傳入，並回傳一個新的陣列
 * callback = function
 * 原本陣列不會改變
 * 當回傳 true 時，該元素會被加入到新的陣列中
 */
let loseScore = score.filter(function (item, index, array) {
    console.log(item, index, array);
    return item < 60;
});

console.log(loseScore);

/**
 * reduce(callback) 會將陣列的每一個元素傳入，回傳一個數值
 * callback = function
 * 原本陣列不會改變
 * result = 上一次的結果
 * item = 目前的元素
 * index = 目前的索引值
 * array = 原本的陣列
 * initialValue = 初始值(0)
 */
let totalScore = score.reduce(function (result, item, index, array) {
    console.log(
        `result: ${result}, item: ${item}, index: ${index}, array: ${array}`
    );
    return result + item;
}, 0);

console.log(totalScore);

/**
 * 我要將分數先加 10 分，再計算總分
 * 1. 先將分數加 10 分 (map) => 回傳新的陣列
 * 2. 再計算總分 (reduce) => 回傳一個數值
 * 鏈式語法(chaining) 好處
 * 1. 減少變數的宣告
 * 2. 減少重複的程式碼
 * 3. 增加可讀性(?)
 * 4. 減少記憶體的使用
 */
let addTotalScroe = score
    .map(function (item, index, array) {
        return item + 10;
    })
    .reduce(function (result, item, index) {
        return result + item;
    }, 0);

console.log(addTotalScroe);

/**
 * 我要將陣列的元素串接成一個字串
 */
let strs = ["我", "來", "測試", "陣列", "的", "方法"];
let string = strs.reduce(function (result, item, index) {
    return result + item;
}, "");

console.log(string);

/**
 * join(separator) 會將陣列的元素串接成一個字串
 * separator = 分隔符號(預設為逗號)
 * 原本陣列不會改變
 */
console.log("-----------------JOIN-----------------");
let arrayString = ["我", "來", "測", "試", "陣", "列", "的", "方", "法"];
let joinString = arrayString.join(",");
console.log(joinString);

/**
 * 學生成績資料陣列
 * 每個元素都是一個物件，包含學生的基本資料和各科成績
 */
let students = [
    {
        name: "小明",
        chinese: 85,
        english: 76,
        math: 90,
    },
    {
        name: "小華",
        chinese: 92,
        english: 88,
        math: 95,
    },
    {
        name: "小芳",
        chinese: 78,
        english: 94,
        math: 80,
    },
    {
        name: "小強",
        chinese: 88,
        english: 68,
        math: 72,
    },
    {
        name: "小美",
        chinese: 95,
        english: 90,
        math: 85,
    },
];

console.log("學生成績資料：");
console.log(students);

/**
 * 將學生資料轉換成 CSV 格式
 * 1. 先產生 CSV 的標題列
 * 2. 使用 map 將每個學生資料轉換成 CSV 的一列
 * 3. 使用 join 將所有列合併成一個字串
 */
let csvHeader = ["姓名", "國文", "英文", "數學"].join(",");
let csvRows = students.map(function (student) {
    return [student.name, student.chinese, student.english, student.math].join(
        ","
    );
});

let csvString = [csvHeader, ...csvRows].join("\n");

console.log("CSV 格式的學生資料：");
console.log(csvString);

/**
 * 下載 CSV 檔案的函數
 * 1. 建立一個 Blob 物件，包含 CSV 內容
 * 2. 建立一個暫時的下載連結
 * 3. 觸發下載
 * 4. 清理暫時的 URL 物件
 */
function downloadCSV() {
    // 加入 BOM (Byte Order Mark)，讓 Excel 可以正確顯示中文
    const BOM = "\uFEFF";
    // 建立 Blob 物件
    const blob = new Blob([BOM + csvString], {
        type: "text/csv;charset=utf-8",
    });
    // 建立下載連結
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "學生成績表.csv";

    // 將連結加入網頁中並觸發點擊
    document.body.appendChild(link);
    link.click();

    // 清理
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

// 建立下載按鈕
let downloadButton = document.createElement("button");
downloadButton.textContent = "下載成績表";
downloadButton.addEventListener("click", downloadCSV);
document.body.appendChild(downloadButton);

let letters = ["A", "B", "C", "D", "E"];
console.log(letters);

/**
 * slice(start, end) 會回傳一個新的陣列，包含從 start 到 end 的元素
 * 原本的陣列不會改變
 */
let p = letters.slice(1, 5);
console.log(letters, p);

/**
 * splice(start, deleteCount, item1, item2, ...) 會從陣列中刪除元素，並插入新的元素
 * 原本的陣列會改變
 */
// letters.splice(0, 2);
// console.log(letters);

/**
 * 我要找到 C 並將他移除
 */
let findCArr = ["A", "B", "C", "D", "E"];
console.log("----我要找到 C 並將他移除----");
console.log(findCArr);

let cIndex = findCArr.indexOf("C");
if (cIndex !== -1) {
    findCArr.splice(cIndex, 1);
}
console.log(findCArr);
