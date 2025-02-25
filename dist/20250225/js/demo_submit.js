let registerForm = document.querySelector("#register-form");
let name = document.querySelector("#name");
let email = document.querySelector("#email");

registerForm.addEventListener("submit", function (e) {
    // 中斷預設行為
    e.preventDefault();
    console.log("submit");
    // e 是 event 物件
    console.log(e);

    // 檢查 name 與 email 是否為空
    if (name.value == "" || email.value == "") {
        alert("請輸入姓名與電子郵件");
        // 中斷 function 的執行
        return;
    }

    registerForm.submit();
});
