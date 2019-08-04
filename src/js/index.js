"use strict";
var checkbox = document.getElementById('checkbox');
checkbox.addEventListener( 'change', function() {
    if(this.checked) {
        // document.body.classList.add('js__no_scroll-body');
        document.getElementById('opened').classList.add('opened');
        document.getElementById('scroll').classList.add('js__no_scroll');
        // blk()
    } else {
        // document.body.classList.remove('js__no_scroll-body');
        document.getElementById('opened').classList.remove('opened');
        document.getElementById('scroll').classList.remove('js__no_scroll');
    }
});

// function blk() {
//   document.getElementById('scroll').classList.add('js__no_scroll');
// }
