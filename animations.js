let navbar = document.getElementById('navlinks');
let menubtn = document.getElementById('menu-btn');

function show(){
    // x.classList.toggle("fa-xmark")
    if(navbar.style.top == '-100%'){
        navbar.style.top = '0%';
        
        
    }
    else{
        navbar.style.top = '-100%';

    }
}
    
