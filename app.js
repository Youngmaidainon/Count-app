// app.js
let count = 0;
const countEl = document.getElementById("count");

// ฟังก์ชั่นอัปเดทตัวเลข
function updateCount() {
    countEl.textContent = count; //เปลี่ยนข้อความที่แสดงอยู่บนหน้าเว็บไซต์แบบ Real-time
    if (count > 0) countEl.style.color = "green";
    else if (count < 0) countEl.style.color = "red";
    else countEl.style.color = "black";
}

// เพิ่มขึ้นทีละ 5
document.getElementById("increase").addEventListener("click", () => {
    count += 5;
    updateCount();
});

// ลดลงทีละ 5
document.getElementById("decrease").addEventListener("click", () => {
    count -= 5;
    updateCount();
});

// ปุ่มรีเซ็ตตัวเลขกลับไปเป็น 0
document.getElementById("reset").addEventListener("click", () => {
    count = 0;
    updateCount();
});