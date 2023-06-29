/*!
 * Name : Code Station Community
 * Details : Ad-Block Detected for csc
 * Owner : Romeo89
 * Website : https://www.cscplus.work
 */
! function() {
    var e = document.createElement("script");
    e.type = "text/javascript", e.async = !0, e.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", e.onerror = function() {
        document.getElementById("post-body").innerHTML = '<p class="csc-note blocked"><strong>Ad-Block Detected</strong><br><br>Vui lòng tắt trình chặn quảng cáo của bạn và làm mới trang ..<br><br>Cảm ơn rất nhiều !!!</p>', window.adblock = !0
    };
    var t = document.getElementsByTagName("script")[0];
    t.parentNode.insertBefore(e, t);
    var n = document.createElement("style");
    n.innerHTML = 'article .csc-note{position:relative;padding:20px 30px 20px 50px;background-color:#385c7b;background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,.2) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.2) 50%,rgba(255,255,255,.2) 75%,transparent 75%,transparent);font-size:.85rem;line-height:1.62em;border-radius:2px} article .csc-note:before{content:"★";position:absolute;left:18px;font-size:20px}', document.head.appendChild(n)
}();
