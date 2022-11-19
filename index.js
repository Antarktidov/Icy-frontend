//инициализируем переменные
var isRightToolsAdded = false;
var isMobileMenyHidden = true;
var isInterwikiVisible = false;
var additionalRigtTools = document.querySelector(".additional-page-tools");
var additionalRigtToolsToggler = document.querySelector(".page-tools-text");
var pageHeader = document.querySelector(".page-header__title-wrapper");
var mobilePageTools = document.querySelectorAll(".page-tools-mobile-additional");
var middleMenuMobile = document.querySelector(".mobile-nav-middle");
var toggleMobileTopMenu = document.querySelector(".top-menu-mobile");
var interwikis = document.querySelector(".interwikis");
var mobileEditorToolsButton = document.querySelector(".mobile-editor-tools-button");

//дополнительные инструменты редактора
function displayAdittionalRightTools() {
   if (!isRightToolsAdded) {
    additionalRigtTools.style.display = "unset";
    additionalRigtToolsToggler.innerHTML = "-";
    pageHeader.style.marginTop = "-284px";
    additionalRigtToolsToggler.title = 'Меньше инструментов';
   } else {
    additionalRigtTools.style.display = "none";
    additionalRigtToolsToggler.innerHTML = "+";
    pageHeader.style.marginTop = "-50px";
    additionalRigtToolsToggler.title = 'Больше инструментов';
   }
   isRightToolsAdded = !isRightToolsAdded;
}

//дополнительные инструменты мобильного редактора
function displayMobileEditorTools() {
    if (!isRightToolsAdded) {
        for (var i = 0; i < mobilePageTools.length; i++) {
        mobilePageTools[i].style.display = "unset";
            }
        mobileEditorToolsButton.title = "Меньше инструментов";
    } else {
        for (var i = 0; i < mobilePageTools.length; i++) {
            mobilePageTools[i].style.display = "none";
                }
                mobileEditorToolsButton.title = "Больше инструментов";
    }
    isRightToolsAdded = !isRightToolsAdded;
}

//верхняя мобильная менюшка
function ToggleMobileMenu() {
    if (isMobileMenyHidden) {
        middleMenuMobile.style.display = "unset";
        toggleMobileTopMenu.style.content = "url(file:///D:/Icy/images/vector-cancel-icon.jpg)";
    } else {
        middleMenuMobile.style.display = "none";
        toggleMobileTopMenu.style.content = "unset";
    }
    isMobileMenyHidden = !isMobileMenyHidden;
}
//переключение между языками
function showInterwikis() {
    if (!isInterwikiVisible) {
        interwikis.style.visibility = "unset";
    } else {
        interwikis.style.visibility = "hidden";
    }
    isInterwikiVisible = !isInterwikiVisible;
}