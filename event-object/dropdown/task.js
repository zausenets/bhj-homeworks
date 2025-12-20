

const values = [...document.querySelectorAll(".dropdown__value")]; //ищу явный массив и разбиваю его

values.forEach(value => {  //для каждого элемента в массиве
  const parent = value.parentElement;  //ищу ближайшего родителя
  const list = parent.querySelector(".dropdown__list");  //ищу первый элемент списка в родителе

  //функция для раскрытия списка по нажатию
  function Onclick() { 
    list.className = "dropdown__list dropdown__list_active";  
  }
  
  //функция для выбора элемента списка
  function clickItem(event){  
    event.preventDefault();  //отменяю дефолтный переход по ссылку
    const link = event.target.closest(".dropdown__link");  //ищу ближайшего к ссылке родителя с селектором
    list.className = "dropdown__list";  //сворачиваю список
    value.textContent = link.textContent;  //подставляю выбранный вариант
  }

  value.addEventListener("click", Onclick);  //клик по списку

  list.addEventListener("click", clickItem);  //клик по пункту списка
});