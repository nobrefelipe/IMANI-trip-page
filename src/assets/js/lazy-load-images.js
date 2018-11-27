/**

 Fetch image's src when images get to the viewport

 @param elements -> array of DOM elements

 */


import intersectionObserver from './intersection-observer.js';


const loadImages = (elements) =>{

  intersectionObserver(elements, fetchSrc, false, false);

};

const fetchSrc = (el) => {

  let images = el.querySelectorAll('img.lazyload');

  // LETS LOAD THE IMAGES
  images.forEach( img => {

    img.src = img.dataset.src

  });


  // LETS ANIMATE THE IMAGES IN
  el.classList.add('inViewPort')


};

export default loadImages;