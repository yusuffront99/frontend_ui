menuToggle = document.querySelector('#menu-toggle');
activeElements = document.querySelectorAll('.active-element');

menuToggle.addEventListener("click", function(){
    for(var activated = 0; activated < activeElements.length; activated++){
        activeElements[activated].classList.toggle("active");
    }
})