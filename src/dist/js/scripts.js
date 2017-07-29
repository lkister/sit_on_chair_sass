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
    var summary = document.querySelector('.summary_panel');
    var form = document.querySelector('.form');
    var dataPrice = document.querySelectorAll('.list_panel li');
    var sum = 0;
    var summarize = document.querySelector('.sum strong');
    var checkbox = document.querySelector('#transport');
    var images = document.querySelector('.image_part');
    var chairChoosen = document.querySelector('.drop_down_list span');

    for (var i = 0; i < listArrow.length; i++) {
        listArrow[i].addEventListener('click', function(e) {
            this.nextElementSibling.classList.toggle("list_panel_visible");
            var selectedItem = this.nextElementSibling.querySelectorAll('li');

            for (var i = 0; i < selectedItem.length; i++) {
                selectedItem[i].addEventListener('click', function(e) {
                    this.parentElement.parentElement.firstElementChild.style.color = "#575757";
                    this.parentElement.parentElement.firstElementChild.innerText = this.innerText;
                    this.parentElement.classList.remove("list_panel_visible");

                    if (this.parentElement.parentElement.firstElementChild.innerText != "Wybierz rodzaj") {
                        summary.firstElementChild.firstElementChild.innerText = form.firstElementChild.firstElementChild.innerText;
                        for (var i = 0; i < dataPrice.length; i++) {
                            if (dataPrice[i].innerText == summary.firstElementChild.firstElementChild.innerText) {
                                summary.children[1].firstElementChild.innerText = dataPrice[i].dataset.price + " zł";
                                sum = parseInt(summary.children[1].firstElementChild.innerText);
                            }
                        }
                    }
                    if (this.parentElement.parentElement.firstElementChild.innerText != "Wybierz kolor") {
                        summary.firstElementChild.children[1].innerText = form.children[1].firstElementChild.innerText;
                        for (var i = 0; i < dataPrice.length; i++) {
                            if (dataPrice[i].innerText == summary.firstElementChild.children[1].innerText) {
                                summary.children[1].children[1].innerText = dataPrice[i].dataset.price + " zł";
                            }
                        }
                    }
                    if (this.parentElement.parentElement.firstElementChild.innerText != "Wybierz rodzaj") {
                        summary.firstElementChild.children[2].innerText = form.children[2].firstElementChild.innerText;
                        for (var i = 0; i < dataPrice.length; i++) {
                            if (dataPrice[i].innerText == summary.firstElementChild.children[2].innerText) {
                                summary.children[1].children[2].innerText = dataPrice[i].dataset.price + " zł";
                            }
                        }
                    }
                    sum = parseInt(summary.children[1].firstElementChild.innerText) + parseInt(summary.children[1].children[1].innerText) + parseInt(summary.children[1].children[2].innerText) + parseInt(summary.children[1].lastElementChild.innerText);
                    if (!sum.isNaN) {
                        summarize.innerText = "";
                    }
                    if (sum>=0) {
                        summarize.innerText = sum + " zł";
                    }
                    if (chairChoosen.innerText == "Margarita") {
                        images.children[0].classList.add("image-hidden");
                        images.children[2].classList.add("image-hidden");
                        images.children[1].classList.remove("image-hidden");
                    }
                    if (chairChoosen.innerText == "Selena") {
                        images.children[1].classList.add("image-hidden");
                        images.children[2].classList.remove("image-hidden");
                        images.children[0].classList.add("image-hidden");
                    }
                    if (chairChoosen.innerText == "Clair") {
                        images.children[2].classList.add("image-hidden");
                        images.children[0].classList.remove("image-hidden");
                        images.children[1].classList.add("image-hidden");
                    }
                });
            }
        });
    }

    checkbox.addEventListener('click', function(e) {
        if (checkbox.checked) {
            summary.firstElementChild.lastElementChild.innerText = "Transport";
            summary.children[1].lastElementChild.innerText = checkbox.dataset.transport + " zł";
            sum = parseInt(summary.children[1].firstElementChild.innerText) + parseInt(summary.children[1].children[1].innerText) + parseInt(summary.children[1].children[2].innerText) + parseInt(summary.children[1].lastElementChild.innerText);
            if (!sum.isNaN) {
                summarize.innerText = "";
            }
            if (sum>=0) {
                summarize.innerText = sum + " zł";
            }
        } else {
            summary.firstElementChild.lastElementChild.innerText = "Bez transportu";
            summary.children[1].lastElementChild.innerText = "0 zł";
            sum = parseInt(summary.children[1].firstElementChild.innerText) + parseInt(summary.children[1].children[1].innerText) + parseInt(summary.children[1].children[2].innerText) + parseInt(summary.children[1].lastElementChild.innerText);
            if (!sum.isNaN) {
                summarize.innerText = "";
            }
            if (sum>=0) {
                summarize.innerText = sum + " zł";
            }
        }
    });
});
