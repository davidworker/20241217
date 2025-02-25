const restore = function (data) {
    data.forEach((item) => {
        generateItem(item.value, item.isDone, item.uid);
    });
};

class Storage {
    constructor(key) {
        this.key = key;
    }

    get() {
        let data = localStorage.getItem(this.key);
        if (!data) {
            return [];
        }
        return JSON.parse(data);
    }

    set(value) {
        localStorage.setItem(this.key, JSON.stringify(value));
    }
}

let storage = new Storage("todo");
let todoData = storage.get();

let todoInput = document.querySelector("#todoInput");
let addTodo = document.querySelector("#addTodo");
let todoList = document.querySelector("#todoList");

const appendTodo = (value) => {
    const uid = Date.now().toString();
    todoData.push({
        isDone: false,
        value: value,
        uid: uid,
    });
    storage.set(todoData);

    generateItem(value, false, uid);
};

const generateItem = function (value, isDone, uid) {
    let li = document.createElement("li");
    li.innerHTML = `
        <input type="checkbox" ${isDone ? "checked" : ""} data-uid="${uid}" />
        <span>${value}</span>
        <button class="delete-btn" data-uid="${uid}">刪除</button>
    `;
    todoList.appendChild(li);
};

const appendProcess = async function () {
    // 確認是否有輸入值
    let value = todoInput.value;
    if (!value) {
        await Swal.fire({
            icon: "error",
            title: "新增失敗",
            html: "<p>請輸入待辦事項</p>",
        });
        setTimeout(function () {
            todoInput.focus();
        }, 500);
        return;
    }
    appendTodo(value);
    todoInput.value = "";
    todoInput.focus();
};

// 綁定 addTodo 的 click 事件
addTodo.addEventListener("click", function () {
    appendProcess();
});

// 綁定 todoInput 的 keyup 事件
todoInput.addEventListener("keyup", function (e) {
    let key = e.key;
    if (key === "Enter") {
        appendProcess();
    }
});

// 綁定刪除按鈕的功能
todoList.addEventListener("click", function (e) {
    let target = e.target;
    if (target.classList.contains("delete-btn")) {
        let uid = target.dataset.uid;
        // 找到對應的 todoData 的 index
        let index = todoData.findIndex((item) => item.uid === uid);
        // 刪除 todoData 的該項目
        todoData.splice(index, 1);
        // 更新 localStorage
        storage.set(todoData);
        // 刪除對應的 li
        let li = target.closest("li");
        li.remove();
    }

    if (target.type === "checkbox") {
        let isDone = target.checked;
        let uid = target.dataset.uid;
        // 找到對應的 todoData 的 index
        let index = todoData.findIndex((item) => item.uid === uid);
        // 更新 todoData 的 isDone
        todoData[index].isDone = isDone;
        // 更新 localStorage
        storage.set(todoData);
    }
});

restore(todoData);
