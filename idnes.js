// ==UserScript==
// @name         idnes killer
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  idnes
// @author       You
// @match        http*://*.idnes.cz/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/fanick1/tampermonkey_scripts/master/idnes.js
// @downloadURL  https://raw.githubusercontent.com/fanick1/tampermonkey_scripts/master/idnes.js
// @run-at document-idle
// ==/UserScript==


window.idneskillervar1 = false;
function run(){

    'use strict';

    console.log('we are doing this');

    var tables = document.body.getElementsByTagName('table');
   erase(tables);
    erase(document.body.getElementsByTagName('iframe'));
       erase(document.body.getElementsByTagName('meta'));
    document.body.onclick = undefined;
    // Your code here...
}

(function() {

    'use strict';
    run();
    setTimeout(run, 1000);
    if(!window.idneskillervar1){
        window.idneskillervar1 = true;
        document.addEventListener('click', killer, true);
    }
})();
function killer(e){
    if(e.target.tagName == 'DIV'){e.stopPropagation();}
}
function erase(elements){
    for(let t of elements){
        t.parentElement.removeChild(t);

    }

}
