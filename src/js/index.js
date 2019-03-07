import '../scss/index.scss';
import InlineSVG from 'inline-svg';

function initSVG() {
    InlineSVG.init({
        svgSelector: 'img.svg', // the class attached to all images that should be inlined
        initClass: 'js-inlinesvg', // class added to <html>
      }, function () {
        console.log('All SVGs inlined');
      });
}

function toggleDetailbox() {
  let detailbox = document.getElementsByClassName('js-detailbox');
  let button = document.getElementsByClassName('o-button');
  
  const classname = 'c-detailbox--is-visible';
  const buttonClassname = 'o-button--is-hidden';

  if(detailbox[0].classList.contains(classname)) {
    detailbox[0].classList.remove(classname);
    button[0].classList.remove(buttonClassname);
  } else {
    detailbox[0].classList.add(classname);
    button[0].classList.add(buttonClassname);
  }
}

function detailboxEvents() {
  let buttons = document.getElementsByClassName('js-toggle-detailbox');
  Array.from(buttons).forEach(function(element) {
    element.addEventListener('click', toggleDetailbox, false);
  });
}


document.addEventListener("DOMContentLoaded",function(){

    initSVG();
    detailboxEvents();

});
