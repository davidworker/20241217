/**
 * 只有確保 person 是物件，沒有限制屬性不可修改
 * 只有限制第一層的類型
 * 屬性(property) = 變數(variable)
 * 方法(method) = 函式(function)
 */
const person = {
    name: "David",
    age: 20,
    city: "Taipei",
    email: "david@gmail.com",
    sayHello: function () {
        console.log("Hello, my name is " + this.name);
    },
};

/**
 * 更改 person 的屬性，不會報錯
 */
person.name = "John";

console.log(person);

person.sayHello();

/**
 * 重新賦值 person，會報錯
 */
// person = 1;

/**
 * 解構賦值
 * name:sname 將屬性名稱重新命名為 sname
 * age 將屬性名稱賦值給變數 age
 * city 將屬性名稱賦值給變數 city
 * from: sform 將屬性名稱重新命名為 sform，並且設定預設值為 "Taiwan"
 */
let { name: sname, age, city, from: sform = "Taiwan" } = person;

console.log(sname, age, city, sform);

/**
 * Object 使用類似 JSON 的格式
 */
let students = [
    {
        name: "John",
        age: 20,
        city: "Taipei",
        email: "david@gmail.com",
        score: 90,
    },
    {
        name: "David",
        age: 20,
        city: "Taipei",
        email: "david@gmail.com",
        score: 80,
    },
];

console.log(students);

console.log("----轉 JSON 格式----");
console.log(JSON.stringify({ students }));

/**
 * 將轉換的結果貼到 students.json 檔案
 * 安裝套件 JSON Crack 方便查看結構
 */
