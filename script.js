document.getElementById('hamburger').addEventListener('click', () => {
    let ele = document.getElementById('hamburger');
    let menu = document.getElementById('navbar__menu');
    if (ele.classList.contains('clicked')){
        ele.classList.remove('clicked');
        ele.src='./assets/hamburger.png';
        menu.style.display = "none";
    }
    else {
        ele.classList.add('clicked');
        menu.style.display = "flex";
        ele.src='./assets/close.png';
        // menu.style.height = "12rem";
    }
   
    console.log('hamburger clicked');
    
});