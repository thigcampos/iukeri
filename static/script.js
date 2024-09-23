function setFavicon() {
    const favicon = document.querySelector('link[rel="icon"]');
    console.log(favicon)
    favicon.href = (window.matchMedia('(prefers-color-scheme: dark)').matches)
                    ? '/static/favicon-dark.ico'
                    : '/static/favicon-light.ico';
};

// Call on load
setFavicon();

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setFavicon);

