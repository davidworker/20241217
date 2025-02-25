// 思維1: 將全部的 li 進行 click 事件監聽
const method1 = function () {
    let items = document.querySelectorAll(".list-item");
    items.forEach((item) => {
        item.addEventListener("click", function () {
            console.log(item.innerHTML);
        });
    });
};

// 思維2: 擒賊先擒王
const method2 = function () {
    let listWrap = document.querySelector("#list");
    listWrap.addEventListener("click", function (e) {
        // 阻止事件冒泡
        e.stopPropagation();
        //  e.target 是點擊的元素
        let item = e.target;
        console.log(item.innerHTML);
    });
};

const handleClick = function () {
    let body = document.querySelector("body");
    body.addEventListener("click", function (e) {
        console.log(e.target);
    });
};

// 暴力新增，原本綁定的事件會消失
const forceAppend = function (content) {
    let listWrap = document.querySelector("#list");
    listWrap.innerHTML += `<li class="list-item">${content}</li>`;
};

// 正統新增。原本綁定的事件不會消失
const appendItem = function (content) {
    let listWrap = document.querySelector("#list");
    let newItem = document.createElement("li");
    newItem.className = "list-item";
    newItem.innerHTML = content;
    // 新增當下綁定
    // newItem.addEventListener("click", function () {
    //     console.log(newItem.innerHTML);
    // });
    listWrap.appendChild(newItem);
};

const canAddItem = function () {
    let addButton = document.querySelector("#add-item");
    let newItem = document.querySelector("#new-item");
    let listWrap = document.querySelector("#list");

    addButton.addEventListener("click", function () {
        // 如果沒有輸入內容，則不新增
        if (newItem.value === "") {
            alert("請輸入內容");
            return;
        }

        // forceAppend(newItem.value);
        // method1();

        appendItem(newItem.value);
        // method1();
    });
};

handleClick();
method2();
// method1();
canAddItem();
