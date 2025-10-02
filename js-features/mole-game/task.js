//переменная для массива лунок
let holes = document.getElementsByClassName("hole");

//переменная для лунок
let getHole = index => document.getElementById(`hole${index}`);

//счётчики побед и поражений
let dead = 0;
let lost = 0;

//элементы для отображения счетчиков
let deadCounter = document.getElementById("dead");
let lostCounter = document.getElementById("lost");

//прохожусь циклом по лункам
for (let i = 1; i <= holes.length; i++) {
    let hole = getHole(i);

    hole.onclick = function () {
        if (hole.classList.contains("hole_has-mole")) {
            dead++;
            deadCounter.textContent = dead;
        } else {
            lost++;
            lostCounter.textContent = lost;
        }

        //победа
        if (dead === 10) {
            alert("Вы победили! 🎉");
            reset();
        }

        //поражение
        if (lost === 5) {
            alert("Вы проиграли 😢");
            reset();
        }
    };
}

//ресет игры
function reset() {
    dead = 0;
    lost = 0;
    deadCounter.textContent = 0;
    lostCounter.textContent = 0;
}