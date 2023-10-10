let navbar = document.getElementById('navlinks');
let menubtn = document.getElementById('menu-btn');
function change(x){
    x.classList.toggle("fa-solid fa-xmark")
}
function show(){
    // x.classList.toggle("fa-solid fa-xmark")
    if(navbar.style.top == '-100%'){
        navbar.style.top = '0%';
        
        
    }
    else{
        navbar.style.top = '-100%';

    }
    
}
    
