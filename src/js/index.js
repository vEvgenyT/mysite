"use strict";
var checkbox = document.getElementById('checkbox');
checkbox.addEventListener( 'change', function() {
    if(this.checked) {
        // document.body.classList.add('js__no_scroll-body');
        document.getElementById('opened').classList.add('opened');
        document.getElementById('scroll').classList.add('js__no_scroll');
        document.getElementById('opened').classList.remove('header_fading');
        // blk()
    } else {
        // document.body.classList.remove('js__no_scroll-body');
        document.getElementById('opened').classList.remove('opened');
        document.getElementById('scroll').classList.remove('js__no_scroll');
        document.getElementById('opened').classList.add('header_fading');
    }
});

// setTimeout(function(){
//   var a = document.getElementsByClassName('main_start');
//   a[0].classList.add('main__title_fonts');
//   a[0].classList.add('main__text_margin');
//   a[0].classList.remove('main_start');
// }, 1900);

//
//
