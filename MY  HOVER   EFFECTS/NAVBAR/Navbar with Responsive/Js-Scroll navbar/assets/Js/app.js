let anyName = document.getElementById('navbarJs');
window.onscroll = function (){
    let scrollNav = window.scrollY;
    if(scrollNav >=100){
        anyName.classList.add('navbarScrollJsClass');
    }
    else{
        anyName.classList.remove('navbarScrollJsClass');
    }
}