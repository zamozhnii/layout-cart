// CART METHODS
// ADD
// REMOVE
// CLEAR

function setCartData(o){
    localStorage.setItem('test', JSON.stringify(o));
    return false;
}

function getCartData(){
    return JSON.parse(localStorage.getItem('test'));
}

function checkQuantityInStorage() {
    var dataCart = getCartData();
    let quantCart = document.querySelector('.headerNavigationCart span');
    if(dataCart !== null){
        var quantityInStorage = 0;
        for(let _dataCart in dataCart) {
            quantityInStorage++;
        }
        if(quantityInStorage === 0) {
            quantityInStorage = 1;
        }
        if(quantityInStorage > 0) {
            quantCart.style.display = "block";
            quantCart.innerHTML = quantityInStorage;
        } 
    } else {
        quantCart.style.display = "none";
        quantCart.innerHTML = 0;
    }
}

function addToCart(id) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var jsondata = JSON.parse(this.responseText);
            jsondata.forEach(element => {
                var cartData;
                if(element.id === id) {
                    cartData = getCartData() || {};
                    if(cartData.hasOwnProperty(id)){
                        cartData[id][3] += 1;
                    } else {
                        cartData[id] = [element.name, element.price, element.discount, 1];
                    }
                    setCartData(cartData);
                    checkQuantityInStorage();
                }
            });
            return false;
        }
    };
    xhttp.open("GET", "https://my-json-server.typicode.com/zamozhnii/layout-cart/products", true);
    xhttp.send();
}

// addToCart(1);
addToCart(6);
addToCart(2);
addToCart(3);

function clearCart(key) {
    localStorage.removeItem(key);
    checkQuantityInStorage();
}

// clearCart('test');

function removeFromCart(id) {
    var cartData = getCartData();
    var newDataCart = {};
    for(const data in cartData) {
        if(data === "" + id) {
            continue;
        } else {
            newDataCart[data] = cartData[data];
        }
    }
    clearCart('test');
    setCartData(newDataCart);
    checkQuantityInStorage();
}

removeFromCart(1);
// removeFromCart(2);
// removeFromCart(3);

// ./ CART METHODS

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


