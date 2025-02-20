/**
 * 使用 document 物件底下的方法(method) querySelector(selector) 來取得 DOM 元素
 * 會回傳一個 Object
 * selector 可以是 CSS 選擇器
 * # 代表 id
 * . 代表 class
 * 可以使用後代選擇器之類的語法
 */
const app = document.querySelector("#app");
console.log(app, typeof app);

/**
 * 物件說明
 * 屬性 = 變數
 * 方法 = 函式
 */

/**
 * 取得元素的內容
 */
const getHtml = function () {
    return app.innerHTML;
};

/**
 * 設定元素的內容(快速方式，直接覆蓋)
 * 不影響原始碼呈現(通稱為後加載行為)
 * 後加載
 * - 影響SEO
 * - 提升使用者體驗
 * - 提升網站速度
 */
const useStringSetHtml = function (string) {
    app.innerHTML = string;
    console.log(string, typeof string);

    /**
     * 會發生錯誤
     * Uncaught TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
     * 因為 newHTML 是字串
     *
     */
    // app.removeChild(newHTML);
};

/**
 * 使用 DOM 方法來設定元素的內容(建議使用)
 */
const useDomSetHtml = function (text) {
    let createDiv = document.createElement("div");
    createDiv.innerHTML = text;

    while (app.firstChild) {
        app.removeChild(app.firstChild);
    }

    app.appendChild(createDiv);
};

/**
 * 使用 DOM 方法來附加元素的內容(建議使用)
 */
const useDomAppendHtml = function (text) {
    /**
     * 建立元素
     */
    let createDiv = document.createElement("div");
    createDiv.innerHTML = text;

    /**
     * 將元素附加到 DOM 中
     */
    app.appendChild(createDiv);
    console.log(createDiv, typeof createDiv);

    return createDiv;
};

/**
 * 使用 DOM 方法來移除元素
 */
const useDomRemoveHtml = function (dom) {
    app.removeChild(dom);
    console.log(dom, typeof dom);
};

/**
 * 取得 #account input 元素
 */
const getAccountDom = function () {
    return document.querySelector("#account");
};

/**
 * 取得 #account input 元素的值
 */
const getAccountValue = function () {
    let accountDom = getAccountDom();

    /**
     * 沒有任何東西，因為 innerHTML 抓取內容，但 input 沒有內容只有 value
     */
    // return accountDom.innerHTML;

    return accountDom.value;
};

/**
 * 設定 #account input 元素的值
 */
const setAccountValue = function (value) {
    let accountDom = getAccountDom();
    accountDom.value = value;
};

/**
 * 設定 #app 元素的樣式
 */
const setAppStyle = function () {
    console.log(app.style);
    /**
     * CSS(dash) -> JS(小駝峰式)
     * background-color -> backgroundColor
     */
    app.style.backgroundColor = "red";
    app.style.color = "white";
    app.style.padding = "10px";
};

/**
 * 設定 #app 元素的 class
 */
const setAppClass = function (className) {
    app.classList.add(className);
};

/**
 * 移除 #app 元素的 class
 */
const removeAppClass = function (className) {
    app.classList.remove(className);
};

/**
 * 建立 {{ 設定 highlight 事件 }} 具名函數
 */
const setHighlightListener = function () {
    console.log("---set highlight---");
    setAppClass("highlight");
};

const removeHighlightListener = function () {
    console.log("---remove highlight---");
    removeAppClass("highlight");
};

const highlightControlEvent = function () {
    console.log("start event listen....");
    const setHighlightButton = document.querySelector("#set-highlight");
    const removeHighlightButton = document.querySelector("#remove-highlight");

    /**
     * 使用具名函數不用擔心重複綁定
     */
    setHighlightButton.addEventListener("click", setHighlightListener);

    /**
     * 改成具名函數
     * 同學改寫
     */
    removeHighlightButton.addEventListener("click", removeHighlightListener);
};

const removeHighlightControlEvent = function () {
    const setHighlightButton = document.querySelector("#set-highlight");
    const removeHighlightButton = document.querySelector("#remove-highlight");

    /**
     * 解除綁定
     * 要使用具名函數
     */
    setHighlightButton.removeEventListener("click", setHighlightListener);

    /**
     * 解除綁定
     * 要使用具名函數
     */
    removeHighlightButton.removeEventListener("click", removeHighlightListener);
};

highlightControlEvent();

/**
 * 重複綁定 -> 表示事件會跑多次
 * 解除綁定
 */

let enevts = {};

/**
 * 當設定事件之後，資料結構變化
 * setHighlightButton.addEventListener("click", setHighlightListener);
 * events.setHighlightListener = true;
 * setHighlightButton.addEventListener("click", setHighlightListener);
 * events.setHighlightListener = true;
 * 
 * removeHighlightButton.addEventListener("click", function () {
        console.log("---remove highlight---");
        removeAppClass("highlight");
    });
    events._uid1_ = true;
    removeHighlightButton.addEventListener("click", function () {
        console.log("---remove highlight---");
        removeAppClass("highlight");
    });
    events._uid2_ = true;
 */

/**
 * 事件類型
 * - click 點擊
 * - focus 聚焦
 * - blur 失去焦點
 * - keyup 按下鍵盤
 * - keypress 按下鍵盤
 * - change 改變
 * - submit 提交
 */

const bindDemoEvent = function () {
    console.log("---bindDemoEvent---");
    const accountDom = getAccountDom();

    /**
     * 當 input 被點擊時觸發(不常用，通常使用 focus)
     */
    accountDom.addEventListener("click", function () {
        console.log("---click---");
    });

    /**
     * 當 input 獲得焦點時觸發
     */
    accountDom.addEventListener("focus", function () {
        console.log("---focus---");
    });

    /**
     * 當 input 失去焦點時觸發(不常用，通常使用 change)
     */
    accountDom.addEventListener("blur", function () {
        console.log("---blur---");
    });

    /**
     * 當值有改變且失去焦點時觸發
     */
    accountDom.addEventListener("change", function () {
        console.log("---change---");
    });

    /**
     * 需求
     * 判斷帳號是否大於 10 個字
     * 如果大於 10 個字，則提示 "帳號長度超過 10 個字"
     * 如果小於 10 個字，則提示 "帳號長度小於 10 個字"
     */

    /**
     * 當按下鍵盤時觸發
     * 如果要檢查內容，通常使用 keyup
     */
    accountDom.addEventListener("keyup", function () {
        console.log("---keyup---");
        console.log(accountDom.value);
        checkAccountLength();
    });

    /**
     * 當按下鍵盤時觸發
     * 如果要檢查內容，通常使用 keyup
     * keypress 會有漏字問題
     */
    accountDom.addEventListener("keypress", function () {
        // console.log("---keypress---");
        // console.log(accountDom.value);
        // checkAccountLength();
    });
};

const checkAccountLength = function () {
    const accountDom = getAccountDom();
    const accountValue = accountDom.value;
    const accountLength = accountValue.length;
    console.log(`目前長度: ${accountLength}`);
    if (accountLength > 10) {
        console.log("帳號長度超過 10 個字");
        accountDom.value = accountValue.slice(0, 10);
    } else {
        console.log("帳號長度小於 10 個字");
    }
};

bindDemoEvent();
