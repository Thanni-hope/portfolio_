let navToggler = document.querySelector(".nav-toggler")
navToggler.addEventListener("click",makeAcross);

function makeAcross(){
    navToggler.classList.toggle("active");
    //TODO

    let nav= document.querySelector(".nav");
    nav.classList.toggle("open");

    if (nav.classList.contains("open")) {
        nav.style.maxHeight = nav.scrollHeight+"px";
    }
    else{
        nav.removeAttribute("style");
    }

}