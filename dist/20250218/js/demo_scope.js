/**
 * 全域作用域
 */

// demo 會放在這邊

/**
 * 作用域 1
 * 區域作用域
 *
 */
{
    let g1 = "我是 let 宣告的 g1";
    var g2 = "我是 var 宣告的 g2";
    const g3 = "我是 const 宣告的 g3";

    /**
     * 外面宣告的變數，也可以在 function 內部使用
     * 使用 function 關鍵字宣告時，會被提升到全域作用域
     */
    function demo() {
        console.log(`呼叫外面定義的變數 g1: ${g1}`);
        console.log(`呼叫外面定義的變數 g2: ${g2}`);
        console.log(`呼叫外面定義的常數 g3: ${g3}`);
    }

    // const demo = function () {
    //     console.log(`呼叫外面定義的變數 g1: ${g1}`);
    //     console.log(`呼叫外面定義的變數 g2: ${g2}`);
    //     console.log(`呼叫外面定義的常數 g3: ${g3}`);
    // };

    // demo();
}

/**
 * 作用域 2
 * 全域作用域
 */
// demo();
// console.log(`呼叫外面定義的變數 g1: ${g1}`);
// console.log(`呼叫外面定義的變數 g2: ${g2}`);

/**
 * 使用 let, var ,const 宣告的變數，為區域作用域
 * 使用 function 宣告的函數，為全域作用域
 */

{
    const addVar = function () {
        let a1 = "a1"; // 10M
        /**
         * 當沒有使用宣告變數關鍵字時，會被提升到全域作用域
         * 會有變數污染的問題
         */
        a2 = "a2"; // 5GB
        console.log(`呼叫區域變數 a1: ${a1}`);
        console.log(`呼叫區域變數 a2: ${a2}`);
    };

    // 56 -> 50 -> 53 -> 57.....
    // addVar();

    // console.log(`呼叫addVar區域變數 a1: ${a1}`);
    console.log(`呼叫addVar區域變數 a2: ${a2}`);
    addVar();

    /**
     * 呼叫 addVar 函數，會使用 20M 的記憶體
     * 當呼叫結束後，記憶體會被釋放 20M(理論上)
     * 但是因為 a2 是全域變數，所以記憶體不會被釋放
     */
}
