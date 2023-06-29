/*!
 * Name : Code Station Community
 * Details : post img | views for csc
 * Owner : Romeo89
 * Website : https://www.cscplus.work
 */

$.each($(".post-view[data-id]"), function(c, f) {
    var b = $(f).parent().find("#postviews").addClass("view-load"),
        d = new Firebase("https://view-post-da9db.firebaseio.com/pages/id/" + $(f).attr("data-id"));
    d.once("value", function(e) {
        var a = e.val(),
            g = !1;
        null == a && (a = {}, a.value = 0, a.url = window.location.href, a.id = $(f).attr("data-id"), g = !0), b.removeClass("view-load").text(a.value), a.value++, "/" != window.location.pathname && (g ? d.set(a) : d.child("value").set(a.value))
    })
});

$('.post-body img').each(function() {
    var img_link = $(this).attr('src')
    $(this).wrap('<a href=' + img_link + ' data-fancybox="gallery"></a>')
})
$('.tr-caption-container').each(function() {
    var caption = $(this).find('.tr-caption').text()
    $(this).find('a').attr('data-caption', caption)
});
