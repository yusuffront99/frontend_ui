menuToggle = document.querySelector('#menu-toggle');
activeElements = document.querySelectorAll('.active-element');

menuToggle.addEventListener("click", function(){
    for(var activated = 0; activated < activeElements.length; activated++){
        activeElements[activated].classList.toggle("active");
    }
})


// ==== BUTTON LOGOUT
btnLogout = document.querySelector('#btn-logout');
showButton = document.querySelector('.show-button');

btnLogout.addEventListener('click', function(){
    showButton.classList.toggle('active');
});

// onmouse click hidden hamburger
window.addEventListener('click', function(e){
    if(e.target != btnLogout){
        showButton.classList.remove('active');
        // navMenu.classList.add('hidden');
    }
});
