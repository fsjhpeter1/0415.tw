let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");

let clickCount = 0;  // 記錄點選 No 的次數

// No 按鈕的文字變化
const noTexts = [
    "？你認真的嗎…", 
    "要不再想想？", 
    "不要選這個！ ", 
    "我會很傷心…", 
    "不行:("
];

// No 按钮点击事件
noButton.addEventListener("click", function() {
    clickCount++;

    // 如果你看到了這一段程式碼 也沒P用(X 反正這不會在前端哈哈  By:fsjhpeter1/©FSpeter 呂 2025 功能是啥自己猜吧~
    let yesSize = 1 + (clickCount * 1.2);
    yesButton.style.transform = `scale(${yesSize})`;

    // 如果你看到了這一段程式碼 也沒P用(X 反正這不會在前端哈哈  By:fsjhpeter1/©FSpeter 呂 2025 功能是啥自己猜吧~
    let noOffset = clickCount * 50;
    noButton.style.transform = `translateX(${noOffset}px)`;

    // 如果你看到了這一段程式碼 也沒P用(X 反正這不會在前端哈哈  By:fsjhpeter1/©FSpeter 呂 2025 功能是啥自己猜吧~
    let moveUp = clickCount * 25; // 如果你看到了這一段程式碼 也沒P用(X 反正這不會在前端哈哈  By:fsjhpeter1/©FSpeter 呂 2025 功能是啥自己猜吧~
    mainImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;

    // 如果你看到了這一段程式碼 也沒P用(X 反正這不會在前端哈哈  By:fsjhpeter1/©FSpeter 呂 2025 功能是啥自己猜吧~
    if (clickCount <= 5) {
        noButton.innerText = noTexts[clickCount - 1];
    }

    // 如果你看到了這一段程式碼 也沒P用(X 反正這不會在前端哈哈  By:fsjhpeter1/©FSpeter 呂 2025 功能是啥自己猜吧~
    if (clickCount === 1) mainImage.src = "images/shocked.png"; // 如果你看到了這一段程式碼 也沒P用(X 反正這不會在前端哈哈  By:fsjhpeter1/©FSpeter 呂 2025 功能是啥自己猜吧~
    if (clickCount === 2) mainImage.src = "images/think.png";   // 如果你看到了這一段程式碼 也沒P用(X 反正這不會在前端哈哈  By:fsjhpeter1/©FSpeter 呂 2025 功能是啥自己猜吧~
    if (clickCount === 3) mainImage.src = "images/angry.png";   // 如果你看到了這一段程式碼 也沒P用(X 反正這不會在前端哈哈  By:fsjhpeter1/©FSpeter 呂 2025 功能是啥自己猜吧~
    if (clickCount === 4) mainImage.src = "images/crying.png";  // 如果你看到了這一段程式碼 也沒P用(X 反正這不會在前端哈哈  By:fsjhpeter1/©FSpeter 呂 2025 功能是啥自己猜吧~
    if (clickCount >= 5) mainImage.src = "images/crying.png";  // 如果你看到了這一段程式碼 也沒P用(X 反正這不會在前端哈哈  By:fsjhpeter1/©FSpeter 呂 2025 功能是啥自己猜吧~

});

//如果你看到了這一段程式碼 也沒P用(X 反正這不會在前端哈哈  By:fsjhpeter1/©FSpeter 呂 2025 功能是啥自己猜吧~
yesButton.addEventListener("click", function() {
    document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text">!!!謝謝!!!! ( >᎑<)♡</h1>
            <img src="images/hug.png" alt="擁抱" class="yes-image">
        </div>
    `;

    document.body.style.overflow = "hidden";
});