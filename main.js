let acsser = document.querySelector(".acsser-ul");
let plaaaaa = document.querySelector(".plaaaaa");
// متغير boolean لتتبع حالة العرض
let isTargetVisible = false;

// تعديل وظيفة toggleVisibility لتبديل حالة العرض
function toggleVisibility() {
    // تغيير حالة المتغير الذي يتبع حالة العرض
    isTargetVisible = !isTargetVisible;

    // تغيير خاصية العرض باستخدام حالة المتغير
    acsser.style.display = isTargetVisible ? "block" : "none";
}

// إضافة مستمع الأحداث click على العنصر الزناد
plaaaaa.addEventListener("click", toggleVisibility);


//التحكم في عدد المنتاجات والميه والسعر

const numberElements = document.querySelectorAll(".number");
const resultElements = document.querySelectorAll(".result");
const counterElements = document.querySelectorAll(".up-and-dawen");

// تكرار الكود على كل العناصر التي تحمل الكلاس المشترك
for (let i = 0; i < numberElements.length; i++) {
    let number = parseInt(numberElements[i].innerText.replace(',', ''));
    let result = parseInt(resultElements[i].innerText.replace(',', ''));

    counterElements[i].querySelector(".pluse").addEventListener("click", () => {
        number++;
        numberElements[i].innerText = number;
        resultElements[i].innerText = number * result;

    });

    counterElements[i].querySelector(".minas").addEventListener("click", () => {
        number--;
        numberElements[i].innerText = number;
        resultElements[i].innerText = number * result;

    });
}