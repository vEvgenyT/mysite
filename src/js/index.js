"use strict";
var checkbox = document.getElementById('checkbox');
checkbox.addEventListener( 'change', function() {
    if(this.checked) {
        document.getElementById('opened').classList.add('opened');
        document.getElementById('scroll').classList.add('js__no_scroll');
        document.getElementById('opened').classList.remove('header_fading');
    } else {
        document.getElementById('opened').classList.remove('opened');
        document.getElementById('scroll').classList.remove('js__no_scroll');
        document.getElementById('opened').classList.add('header_fading');
    }
});

var click = document.getElementById('link');
var radioButton = document.getElementById('checkbox');

  click.onclick = function() {
    document.getElementById('opened').classList.remove('opened');
        document.getElementById('scroll').classList.remove('js__no_scroll');
        document.getElementById('opened').classList.add('header_fading');
    radioButton.checked = false;
  };
