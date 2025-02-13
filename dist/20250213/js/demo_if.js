// if...else

// 巢狀 if
let score = 85;

if (score >= 90) {
    console.log("優秀");
} else if (score >= 80) {
    console.log("良好");
} else if (score >= 70) {
    console.log("及格");
} else {
    console.log("不及格");
}

// 巢狀 if
// 不建議使用，可讀性差
if (score >= 90) {
    if (score >= 95) {
        if (score >= 98) {
            console.log("接近滿分");
        } else {
            console.log("表現不錯");
        }
    } else {
        console.log("表現良好");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const scoreInput = document.getElementById("scoreInput");
    const convertBtn = document.getElementById("convertBtn");
    const result = document.getElementById("result");

    convertBtn.addEventListener("click", function () {
        const score = Number(scoreInput.value);

        // 檢查是否在有效範圍內
        if (score < 0 || score > 100 || isNaN(score)) {
            result.textContent = "請輸入 0 到 100 之間的數字";
            result.style.color = "var(--error-color)";
            return;
        }

        // 進行等級轉換
        let grade;
        if (score >= 90) {
            grade = "甲";
        } else if (score >= 80) {
            grade = "乙";
        } else if (score >= 70) {
            grade = "丙";
        } else if (score >= 60) {
            grade = "丁";
        } else {
            grade = "不及格";
        }

        // 邏輯異常
        // if (score >= 60) {
        //     grade = "甲";
        // } else if (score >= 70) {
        //     grade = "乙";
        // } else if (score >= 80) {
        //     grade = "丙";
        // } else if (score >= 90) {
        //     grade = "丁";
        // } else {
        //     grade = "不及格";
        // }

        // 顯示結果
        result.textContent = `分數 ${score} 的等級為：${grade}`;
        result.style.color = "var(--text-color)";

        // 清空輸入框
        scoreInput.value = "";
    });
});
