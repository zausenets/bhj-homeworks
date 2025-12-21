const tabsCollection = document.querySelectorAll(".tabs");

tabsCollection.forEach(tabsGroup => {
  const tabNav = tabsGroup.querySelector(".tab__navigation");
  const tabs = tabNav.querySelectorAll(".tab");
  const contentContainer = tabsGroup.querySelector(".tab__contents");
  const content = contentContainer.querySelectorAll(".tab__content");

  tabs.forEach(tabItem => {
    tabItem.addEventListener("click", function() {
    //убираю всем активность
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].className = "tab";
    };
    for (let i = 0; i < content.length; i++) {
      content[i].className = "tab__content";
    }; 

    const index = Array.from(tabs).indexOf(this);//ищу индекс кликнутой вкладки
    tabs[index].className = "tab tab_active";
    content[index].className = "tab__content tab__content_active";//даю активность кликнутой
    });
  });
})