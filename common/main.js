function getStatus(e) {
    return 10020 == e.code && popWin.showWin("340", "390", "您的操作过于频繁", "validate.html"), $(".loading-animation").hide(), !1
}

// $(".container").append("<div id='user-login' class='reveal-modal'></div>"), $(".container").append("<div id='user-register' class='reveal-modal'></div>"), $(".container").append("<div id='user-login-out' class='reveal-modal'></div>"), $(".container").append("<div id='user-validate' class='reveal-modal'></div>"), $("head").append("<meta name='fragment' content='!'>"), $("head").append("<link rel='stylesheet' href='css/reveal.css'>"), $("head").append("<link rel='shortcut icon' href='http://oawjg6eb7.bkt.clouddn.com/images/website-logo-2.png'>"), window.requestUrl = "service/towns/", void 0 == $.cookie("token") ? ($(".user-register-btn").show(), $(".user-login-btn").show()) : ($(".index-header .header-right span").hide(), $(".index-header .header-right ").append("<div class='user-personal-btn'>" + $.cookie("nickname").replace(/\"/g, "") + "</span>"), $(".index-header .header-right ").append("<div class='logo-out'><div class='first'></div><div class='second' style='display:none'></div><span class='user-loginOut-btn'>注销</span></div>"), $(".index-header .header-right ol li:nth-child(3)").hide(), $(".index-header .header-right ol li:nth-child(4)").hide()), window.globalNoData = "<div style='center'><img class='global-no-data' src='http://oawjg6eb7.bkt.clouddn.com/images/global-no-data-2.png'></div>", $(".header-right img").bind("click", function () {
//     var e = decodeURI($(".header-right input").val().trim());
//     return "" != e && void(window.location.href = "/search?name=" + e)
// }), $(".header-right input").bind("keyup", function (e) {
//     var i = window.event || e;
//     if ("13" == i.keyCode) {
//         var o = decodeURI($(this).val().trim());
//         if ("" == o)return !1;
//         window.location.href = "/search?name=" + o
//     }
// });
var goToTop = "<div class='go-to-top'><img src='http://oawjg6eb7.bkt.clouddn.com/images/go-to-top.png'><img src='http://oawjg6eb7.bkt.clouddn.com/images/go-to-top-hover.png' style='display:none'></div>";
$(".container").append(goToTop);
var footer = "<div class='index-footer'><ul><li><a href='/aboutus'>关于我们</a></li><li><a href='/fridens'>友情链接</a></li><li><a href='/contract'>网站律师</a></li><li><a href='/mzsm'>免责声明</a></li><li><a href='/expertteam'>专家团队</a></li><li><a href='/ggfw'>广告及服务</a></li><li><a href='/mapsite'>网站地图</a></li></ul><div class='copyright'><p>Copyright © 2015 知略科技. All rights reserved.</p><a class='text-white' href='http://www.miitbeian.gov.cn/publish/query/indexFirst.action'>浙ICP备16027131号</a></div><div class='footer-right'><img src='http://oawjg6eb7.bkt.clouddn.com/images/footer-scan-weixin.png' alt=''><p>扫描关注微信公众号</p></div></div>";
$(".footer").html(footer), $(window).scroll(function () {
    var e = $(window).scrollTop();
    0 == e ? $(".go-to-top").hide() : $(".go-to-top").show()
}), $(".go-to-top").delegate("img", "click", function () {
    $("html, body").animate({scrollTop: 0}, 200)
}), $(".go-to-top").hover(function () {
    $(".go-to-top img").eq(1).show(), $(".go-to-top img").eq(0).hide()
}, function () {
    $(".go-to-top img").eq(1).hide(), $(".go-to-top img").eq(0).show()
}), $(".header-right ol li").hover(function () {
    $(this).find(".second").show().siblings(".first").hide()
}, function () {
    $(this).find(".first").show().siblings(".second").hide()
}), $(".header-right .logo-out").hover(function () {
    $(this).find(".second").show().siblings(".first").hide()
}, function () {
    $(this).find(".first").show().siblings(".second").hide()
}), $(".index-header .header-right ol li:nth-child(2)").hover(function () {
    $(".header-right-weixin").show()
}, function () {
    $(".header-right-weixin").hide()
}), $("body").delegate(".user-register-btn", "click", function (e) {
    popWin.showWin("764", "580", "注册", "register.html")
}), $("body").delegate(".user-login-btn", "click", function (e) {
    popWin.showWin("764", "384", "登录", "login.html")
}), $("body").delegate("#mask", "click", function () {
    $("#mask").remove(), $("#maskTop").remove()
}), $(".register-login-close").click(function () {
    parent.$("#mask").remove(), parent.$("#maskTop").remove()
}), $(".index-header").delegate(".logo-out", "click", function () {
    $.post(requestUrl + "user/user-logout", function (e) {
        window.location.reload()
    })
});
var _paq = _paq || [];
_paq.push(["trackPageView"]), _paq.push(["enableLinkTracking"]), function () {
    var e = "//51towns.iask.in:889/";
    _paq.push(["setTrackerUrl", e + "piwik.php"]), _paq.push(["setSiteId", "2"]);
    var i = document, o = i.createElement("script"), t = i.getElementsByTagName("script")[0];
    o.type = "text/javascript", o.async = !0, o.defer = !0, o.src = e + "piwik.js", t.parentNode.insertBefore(o, t)
}();