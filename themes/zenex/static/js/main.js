// const kursor_1 = new kursor({
//   type: 1,
//   color: "#FFF",
// });

const toggleMenu = (event) => {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
  event.srcElement.classList.toggle("rotate-90");
  event.srcElement.classList.toggle("-rotate-90");
  // menu.classList.toggle("slide-in")
};

const setupTheme = () => {
  const body = document.getElementById("body");
  let theme = localStorage.getItem("theme");
  if (!theme || !theme.length > 0) {
    console.log(window.matchMedia("(prefers-color-scheme: dark)"));
    theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    localStorage.setItem("theme", theme);
  }

  if (theme == "dark" && !body.classList.contains("dark")) {
    body.classList.add("dark");
    setThemeIcon("dark");
  } else if (theme == "light" && body.classList.contains("dark")) {
    body.classList.remove("dark");
    setThemeIcon("light");
  }
};

const setThemeIcon = (theme) => {
  const faClass = theme == "dark" ? "fa-moon" : "fa-sun";
  const themeChanger = document.getElementById("theme-changer");
  themeChanger.classList.remove("fa-sun", "fa-moon");
  themeChanger.classList.add(faClass);
};

const toggleDarkMode = () => {
  let theme = localStorage.getItem("theme");
  console.log(theme);
  localStorage.setItem("theme", theme == "dark" ? "light" : "dark");
  setupTheme();
};

const els = document.querySelectorAll(".k-hover");

els.forEach((item) => {
  item.addEventListener("mouseover", () => {
    console.log("Bhai me aa Gaya");
  });
});

hljs.highlightAll();

let preBlocks = document.querySelectorAll("pre");

preBlocks.forEach((preBlock) => {
  // only add button if browser supports Clipboard API
  if (navigator.clipboard) {
    let button = document.createElement("button");

    button.innerText = "Copy";
    preBlock.appendChild(button);
    const code = preBlock.getElementsByTagName("code")[0].textContent;
    button.addEventListener("click", () => {
      navigator.clipboard.writeText(code);
      button.innerText = "Copied!!!";
      setTimeout(() => {
        button.innerText = "Copy";
      }, 2000);
    });
  }
});

setupTheme();
