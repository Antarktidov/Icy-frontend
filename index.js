//инициализируем переменные
var isRightToolsAdded = false;
var additionalRigtTools = document.querySelector(".additional-page-tools");
var additionalRigtToolsToggler = document.querySelector(".page-tools-text");
var pageHeader = document.querySelector(".page-header__title-wrapper");
var mobilePageTools = document.querySelectorAll(".page-tools-mobile");

function displayAdittionalRightTools() {
   if (!isRightToolsAdded) {
    additionalRigtTools.style.display = "unset";
    additionalRigtToolsToggler.innerHTML = "-";
    pageHeader.style.marginTop = "-284px";
   } else {
    additionalRigtTools.style.display = "none";
    additionalRigtToolsToggler.innerHTML = "+";
    pageHeader.style.marginTop = "-50px";
   }
   isRightToolsAdded = !isRightToolsAdded;
}

function displayMobileEditorTools() {
    if (!isRightToolsAdded) {
        for (var i = 0; i < mobilePageTools.length; i++) {
        mobilePageTools[i].style.display = "unset";
            }
    } else {
        for (var i = 0; i < mobilePageTools.length; i++) {
            mobilePageTools[i].style.display = "none";
                }
    }
    isRightToolsAdded = !isRightToolsAdded;
}