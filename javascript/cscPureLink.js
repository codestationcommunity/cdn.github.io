/*!
 * Name : Code Station Community
 * Details : pure link for csc
 * Owner : Romeo89
 * Website : https://www.cscplus.work
 */
var url = window.location.href,
    uri = window.location.toString(),
    rel = document.querySelector('link[rel="canonical"]').getAttribute('href'),
    fb1 = url.substring(0, url.indexOf('?fbclid')),
    fb2 = url.substring(0, url.indexOf('&fbclid')),
    gi1 = url.substring(0, url.indexOf('?gidzl')),
    gi2 = url.substring(0, url.indexOf('&gidzl')),
    m1 = url.substring(0, url.indexOf('?m=1')),
    m2 = url.substring(0, url.indexOf('&m=1'))
if ((uri.length - fb1.length) > 0) window.history.replaceState({}, document.title, fb1)
if ((uri.length - fb2.length) > 0) window.history.replaceState({}, document.title, fb2)
if ((uri.length - gi1.length) > 0) window.history.replaceState({}, document.title, gi1)
if ((uri.length - gi2.length) > 0) window.history.replaceState({}, document.title, gi2)
if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|Windows Phone|webOS)/i) === null) {
    var url = window.location.href,
        uri = window.location.toString(),
        m1 = url.substring(0, url.indexOf('?m=1')),
        m2 = url.substring(0, url.indexOf('&m=1')),
        _a = document.querySelectorAll('a')
    if ((uri.length - m1.length) > 0) window.history.replaceState({}, document.title, m1)
    if ((uri.length - m2.length) > 0) window.history.replaceState({}, document.title, m2)
    for (var i = 0; i < _a.length; i++) {
        var _b = _a[i].getAttribute('href')
        if (_b.indexOf('?m=1') != -1) _a[i].setAttribute('href', _b.substr(0, _b.indexOf('?m=1')))
        if (_b.indexOf('&m=1') != -1) _a[i].setAttribute('href', _b.substr(0, _b.indexOf('&m=1')))
    }
};
