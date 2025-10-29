// particles-loader.js
// Attempts to load a local copy of particles.min.js first (/assets/js/vendor/particles.min.js).
// If not found, falls back to the CDN. Loads synchronously to ensure particlesJS is defined
// before other scripts (like main.js) execute initialization.
(function(){
  function trySyncLoad(url){
    try{
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false); // synchronous
      xhr.send(null);
      if(xhr.status === 200 || (xhr.status === 0 && xhr.responseText.length)){
        // Evaluate the library in global scope
        (function(){
          var scriptText = xhr.responseText;
          // eslint-disable-next-line no-eval
          eval(scriptText);
        })();
        return true;
      }
    }catch(e){
      // ignore and return false
    }
    return false;
  }

  // Try local vendor file first
  var localPath = '/assets/js/vendor/particles.min.js';
  if(trySyncLoad(localPath)){
    return;
  }

  // Fallback to CDN
  var cdn = 'https://cdn.jsdelivr.net/npm/particles.js';
  if(trySyncLoad(cdn)){
    return;
  }

  // If both fail, emit a console warning. main.js checks for window.particlesJS and will handle absence.
  console.warn('particles.js could not be loaded from local path or CDN. Particle effects will be disabled.');
})();
