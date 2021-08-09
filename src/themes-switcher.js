const refs = {
  body: document.querySelector("body"),
  switcher: document.querySelector(".theme-switch__toggle"),
};

console.log(refs.switcher);

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

// Скрипт для изменения темы
const check = refs.switcher.checked;
function switchTheme(evt) {
  const check = refs.switcher.checked;
  //   console.log(check);
  if (check) {
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
  } else {
    refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
  }
}

// changeThemeClass();
refs.switcher.addEventListener("change", switchTheme);

// Скрипт для записи темы  в локальное хранилище

refs.switcher.addEventListener("change", setLocalStorage);

function setLocalStorage(evt) {
  const check = refs.switcher.checked;
  //console.log(check);

  if (check) {
    localStorage.setItem("theme", Theme.DARK);
  } else {
    localStorage.removeItem("theme");
    localStorage.setItem("theme", Theme.LIGHT);
  }
}

const themeInLocal = localStorage.getItem("theme");

if (themeInLocal === Theme.DARK) {
  refs.body.classList.add(Theme.DARK);
  refs.switcher.checked = true;
}
