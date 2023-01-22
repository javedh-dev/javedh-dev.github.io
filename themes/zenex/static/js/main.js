// const kursor_1 = new kursor({
//     type: 1,
//     color: '#FFF'
// })

const toggleMenu = (event) =>{
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");
    event.srcElement.classList.toggle("rotate-90");
    event.srcElement.classList.toggle("-rotate-90");
    // menu.classList.toggle("slide-in")
}

const toggleDarkMode = (event) => {
    toggleThemeIcon(event.srcElement);
    const body = document.getElementById("body");
    body.classList.toggle("dark");
    kursor_1.color( body.classList.contains('dark') ? "#FFF" : "#000");
}

const toggleThemeIcon = (el) =>{
    if(el.classList.contains("fa-toggle-off")){
        el.classList.remove("fa-toggle-off");
        el.classList.add("fa-toggle-on");
    }else{
        el.classList.remove("fa-toggle-on");
        el.classList.add("fa-toggle-off");
    }
}


const els = document.querySelectorAll(".k-hover");

els.forEach(item => {
    item.addEventListener('mouseover',() => {
        console.log("Bhai me aa Gaya");
      })
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
        button.innerText = "Copied!!!"
        setTimeout(()=>{
            button.innerText = "Copy"
        },2000)
    });
  }
});