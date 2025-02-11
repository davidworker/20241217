// AND 運算子(&&)

console.log("---AND 運算子(&&)---");

const isLoggedIn = true;
const isAdmin = false;

console.log("isLoggedIn && isAdmin", isLoggedIn && isAdmin);

// AND 運算子真值表
console.log("\n--- AND 運算子真值表 ---");
console.log("true && true =", true && true);
console.log("true && false =", true && false);
console.log("false && true =", false && true);
console.log("false && false =", false && false);

// 實際應用示例
const age = 20;
const hasParentConsent = true;

console.log("\n--- 實際應用示例 ---");
const canJoinActivity = age >= 18 && hasParentConsent;
console.log("是否可以參加活動：", canJoinActivity);

// OR 運算子(||)

console.log("---OR 運算子(||)---");

const isUser = true;
const isOnline = false;
console.log("isUser", isUser);
console.log("isOnline", isOnline);

console.log("isUser || isOnline", isUser || isOnline);

// OR 運算子真值表
console.log("\n--- OR 運算子真值表 ---");
console.log("true || true =", true || true);
console.log("true || false =", true || false);
console.log("false || true =", false || true);
console.log("false || false =", false || false);

// NOT 運算子(!)

console.log("--- NOT 運算子(!)---");

const isActive = true;
console.log("isActive", isActive);
console.log("!isActive", !isActive);

// NOT 運算子真值表
console.log("\n--- NOT 運算子真值表 ---");
console.log("!true =", !true);
console.log("!false =", !false);
