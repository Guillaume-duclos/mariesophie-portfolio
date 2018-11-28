exports.preloadImages = (array, waitForOtherResources, timeout) => {
  let loaded = false, list = [], imgs = array.slice(0), t = timeout || 15*1000, timer;

  const loadNow = () => {
    if (!loaded) {
      loaded = true;
      for (let i = 0; i < imgs.length; i++) {
        let img = new Image();

        img.onload = img.onerror = img.onabort = () => {
          let index = list.indexOf(this);
          if (index !== -1) {
            list.splice(index, 1);
          }
        };
        list.push(img);
        img.src = imgs[i];
      }
    }
  };

  if (!waitForOtherResources || document.readyState === 'complete') {
    loadNow();
  } else {
    window.addEventListener('load', function() {
      clearTimeout(timer);
      loadNow();
    });
    timer = setTimeout(() => {
      loadNow();
    }, t);
  }
};
