const menu = document.querySelector("menu#itens")

function clickMenu(){
    if(menu.style.display == "block" ) {
        menu.style.display = "none" 
    } else {
        menu.style.display = "block" 
    }
}

function mudouTamanhoDoSite(){
    if (window.innerWidth >= 768 ) {
        menu.style.display = "block"
    } else {
        menu.style.display = "none"
    }
}