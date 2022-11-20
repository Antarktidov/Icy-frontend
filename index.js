//инициализируем переменные
var isRightToolsAdded = false;
var isMobileMenyHidden = true;
var isInterwikiVisible = false;
var isUserProfileVisible = false;
var isWhiteTheme = true;
var additionalRigtTools = document.querySelector(".additional-page-tools");
var additionalRigtToolsToggler = document.querySelector(".page-tools-text");
var pageHeader = document.querySelector(".page-header__title-wrapper");
var mobilePageTools = document.querySelectorAll(".page-tools-mobile-additional");
var middleMenuMobile = document.querySelector(".mobile-nav-middle");
var toggleMobileTopMenu = document.querySelector(".top-menu-mobile");
var interwikis = document.querySelector(".interwikis");
var mobileEditorToolsButton = document.querySelector(".mobile-editor-tools-button");
var userProfileMeny  = document.querySelector(".user-profile-meny");
var userProfileMenyMobile  = document.querySelector(".user-profile-meny-mobile");
var mobileNavBottomSearch = document.querySelector(".mobile-nav-bottom .search-container");
var mobileNavBottomAvatar = document.querySelector(".mobile-nav-bottom div.avatar");
var moon = document.querySelector(".moon");
var sun = document.querySelector(".sun");
var mobileThemeToggler = document.querySelector(".mobile-theme-toggler");

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
        mobileNavBottomSearch.style.visibility = "hidden";
        mobileNavBottomAvatar.style.visibility = "hidden";
    } else {
        middleMenuMobile.style.display = "none";
        toggleMobileTopMenu.style.content = "unset";
        mobileNavBottomSearch.style.visibility = "unset";
        mobileNavBottomAvatar.style.visibility = "unset";
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
//меню пользователя
function showUserPfofileMenu() {
    if (!isUserProfileVisible) {
        userProfileMeny.style.visibility = "unset";
    } else {
        userProfileMeny.style.visibility = "hidden";
    }
    isUserProfileVisible = !isUserProfileVisible;
}
//меню пользователя на мобиле
function showUserPfofileMenuMobile() {
    if (!isUserProfileVisible) {
        userProfileMenyMobile.style.visibility = "unset";
    } else {
        userProfileMenyMobile.style.visibility = "hidden";
    }
    isUserProfileVisible = !isUserProfileVisible;
}
//Переключатель тем
function toggleTheme() {
    if (isWhiteTheme) {
        document.body.classList.remove("theme-icy-light");
        document.body.classList.add("theme-icy-dark");
        mobileThemeToggler.innerText = "LIGHT THEME";
        moon.style.display = "none";
        sun.style.display = "unset";
    } else {
        document.body.classList.remove("theme-icy-dark");
        document.body.classList.add("theme-icy-light");
        mobileThemeToggler.innerText = "DARK THEME";
        sun.style.display = "none";
        moon.style.display = "unset";
    }
    isWhiteTheme = !isWhiteTheme;
}