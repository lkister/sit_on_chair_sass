document.addEventListener('DOMContentLoaded', function(e) {

//SLIDER -------------------------------------------
    var arrowLeft = document.querySelector('.slider > .arrow-left');
    var arrowRight = document.querySelector('.slider > .arrow-right');
    var slider = document.querySelectorAll('.slider-content > .slider-image');
    var counter = 0;

    slider[counter].classList.add("slider-show-item");

    arrowRight.addEventListener('click', function(e) {
        slider[counter].classList.remove("slider-show-item");
        counter++;
        counter = counter >= slider.length ? 0 : counter;
        slider[counter].classList.add("slider-show-item");
        });

    arrowLeft.addEventListener('click', function(e) {
        slider[counter].classList.remove("slider-show-item");
        counter--;
        counter = counter < 0 ? slider.length -1 : counter;
        slider[counter].classList.add("slider-show-item");
    });
    var sliderAuto = setInterval(function () {
        slider[counter].classList.remove("slider-show-item");
        counter++;
        counter = counter >= slider.length ? 0 : counter;
        slider[counter].classList.add("slider-show-item");
    }, 3000);

//SHOP PANEL--------------------------------------------
    var listArrow = document.querySelectorAll('.list_arrow');

    for (var i = 0; i < listArrow.length; i++) {
        listArrow[i].addEventListener('click', function(e) {
            this.nextElementSibling.classList.toggle("list_panel_visible");
            var selectedItem = this.nextElementSibling.querySelectorAll('li');

            for (var i = 0; i < selectedItem.length; i++) {
                selectedItem[i].addEventListener('click', function(e) {
                    this.parentElement.parentElement.firstElementChild.style.color = "#575757";
                    this.parentElement.parentElement.firstElementChild.innerText = this.innerText;
                    this.parentElement.classList.remove("list_panel_visible");
                });
            }
        });
    }


});
