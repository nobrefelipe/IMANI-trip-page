/**

 Will call a method [callback] when the element [elements] is on the viewport

 @param elements -> array of DOM elements
 @param callback -> returns the element when it is in the viewport

 */


const intersectionObserver = (elements, callback, callbackNotIntersecting, settings) =>{


  const config = settings ? settings : {

    // If the image gets within 100px in the Y axis, start the download.
    rootMargin: '-100px 0px',

    threshold: 0.4

  };


  let observer = new IntersectionObserver(onIntersection, config);

  function onIntersection(entries) {

    entries.forEach( entry => {

      if ( entry.intersectionRatio > 0.1 ) {

        callback(entry.target);

      }else{

        // make sure the function exists
        if(callbackNotIntersecting){

          // lets not call the function when the elements scroll up to  the header
          // we only want to animate element in from the bottom
          if(entry.boundingClientRect.top > 200){

            callbackNotIntersecting(entry.target);

          }

        }

      }

    });

  }

  elements.forEach(el => {

    observer.observe(el);

  });

};

export default intersectionObserver;