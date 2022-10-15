//Get elements at tabs
const tabs = document.querySelectorAll(".tab");

//Identify the click at elements tabs
tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    if (tab.classList.contains("selected")) {
      return;
    }

    selectTab(tab);
    showInformationTab(tab);
  });
});

function selectTab(tab) {
  //When user clicks, deselect selected tab
  const tabSelected = document.querySelector(".tab.selected");
  tabSelected.classList.remove("selected");

  //Mark selected tab
  tab.classList.add("selected");
}

function showInformationTab(tab) {
  //To hide previous content
  const infoSelected = document.querySelector(".info.selected");
  infoSelected.classList.remove("selected");

  //show content selected tab
  const idElementInformationTab = `info-${tab.id}`;

  const informationToBeShown = document.getElementById(idElementInformationTab);
  informationToBeShown.classList.add("selected");
}
