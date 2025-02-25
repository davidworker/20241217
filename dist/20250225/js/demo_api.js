const doGet = function () {
    let url = "https://book.niceinfos.com/frontend/api/?action=sleep&timer=3";

    // 送出請求。期望拿到一些資料
    // 1
    let request = fetch(url); // 要等 10 秒

    // 目前 request 是一個 promise 物件

    // 拿到 response 後，再轉換成 json
    // 3
    let response = request.then(function (stream) {
        return stream.json();
    });

    // promise 的 then 方法，等待上一個動作完成後呼叫
    // 4
    response.then(function (data) {
        console.log(data);
    });

    // 2
    console.log(1234);
};

// document.querySelector("#doGet").addEventListener("click", doGet);

const combineTest = function () {
    doGetAsync();
    console.log("combineTest");
};

const combineWaitTest = async function () {
    await doGetAsync();
    console.log("combineTest");
};

const doGetAsync = async function () {
    let url = "https://book.niceinfos.com/frontend/api/?action=sleep&timer=3";
    let request = await fetch(url);
    let response = await request.json();
    console.log(response);
    console.log(5678);
};

// document.querySelector("#doGet").addEventListener("click", doGetAsync);

// document.querySelector("#doGet").addEventListener("click", combineTest);
document.querySelector("#doGet").addEventListener("click", combineWaitTest);
