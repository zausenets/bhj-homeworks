const clickerCounter = document.getElementById("clicker__counter");
const cookieImg = document.getElementById("cookie");

let flag = false;
cookieImg.onclick = function() {
  clickerCounter.textContent ++;
  if (flag) {
    cookieImg.width = 200;
  } else {
    cookieImg.width = 242;
  }
  flag = !flag;
}