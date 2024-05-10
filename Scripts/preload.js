if (window.innerWidth >= 769) {
    var preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.href = './Images/explore.jpg';
    preloadLink.as = 'image';
    preloadLink.media = 'screen and (min-width: 769px)';
    document.head.appendChild(preloadLink);
}