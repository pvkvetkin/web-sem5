let timeOnLoad = (function () {
    let timeNow = new Date().getTime();
    let timeOnLoad = timeNow - performance.timeOrigin
    return timeOnLoad/1000
})();