var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

var btnSlider = document.querySelectorAll('.mainSliderBtn');
var btnSliderNav = document.querySelectorAll('.mainSliderNavigationItem');

for(let button of btnSlider) {

    button.addEventListener('click', e => {
        if(e.currentTarget.classList.contains('next')) {
            plusSlides(1);
            return;
        }
        plusSlides(-1);
    })
}

for(let button of btnSliderNav) {

    button.addEventListener('click', e => {
        let activeItem = e.currentTarget.getAttribute("data-target");
        currentSlide(activeItem);
    })
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mainSliderItem");
    var dots = document.getElementsByClassName("mainSliderNavigationItem");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


var customSelect = document.querySelector('.mainProductInfo--select');
var customOptions = document.querySelectorAll('.mainProductInfo--selectCustomOption');
customSelect.addEventListener('click', function() {
    this.querySelector('.mainProductInfo--selectCustom').classList.toggle('open');
})

for (const option of customOptions) {
    option.addEventListener('click', function() {
        if (!this.classList.contains('selected')) {
            this.parentNode.querySelector('.mainProductInfo--selectCustomOption.selected').classList.remove('selected');
            this.classList.add('selected');
            this.closest('.mainProductInfo--select').querySelector('.mainProductInfo--selectCustomTrigger span').textContent = this.textContent;
        }
    })
}

window.addEventListener('click', function(e) {
    if (!customSelect.contains(e.target)) {
        customSelect.querySelector('.mainProductInfo--selectCustom').classList.remove('open');
    }
});

var btnsItt = document.querySelectorAll('.mainProductInfo--numberInputBtn');

for (const btn of btnsItt) {
    btn.addEventListener('click', e => {
        if(e.currentTarget.classList.contains('btnDown')) {
            e.currentTarget.parentNode.querySelector('input[type=number]').stepDown();
            return;
        }
        e.currentTarget.parentNode.querySelector('input[type=number]').stepUp()
    });
}

var headerMBbutton = document.querySelector('.headerButton-mb');
var headerMBmenu = document.querySelector('.headerNavigationList');

headerMBbutton.addEventListener('click', function() {
    this.querySelector('.headerButton-mb--Animated').classList.toggle('open');
    headerMBmenu.classList.toggle('open');
})

window.addEventListener('click', function(e) {
    if (!headerMBmenu.contains(e.target) && !headerMBbutton.contains(e.target)) {
        headerMBmenu.classList.remove('open');
        headerMBbutton.querySelector('.headerButton-mb--Animated').classList.remove('open');
    }
});