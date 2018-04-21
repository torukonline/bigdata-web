function getData() {
    var t = parseInt(initVal / 1e10), a = parseInt(initVal / 1e9) - 10 * parseInt(initVal / 1e10), i = parseInt(initVal / 1e8) - 10 * parseInt(initVal / 1e9), e = parseInt(initVal / 1e7) - 10 * parseInt(initVal / 1e8), l = parseInt(initVal / 1e6) - 10 * parseInt(initVal / 1e7), n = parseInt(initVal / 1e5) - 10 * parseInt(initVal / 1e6), r = parseInt(initVal / 1e4) - 10 * parseInt(initVal / 1e5), s = parseInt(initVal / 1e3) - 10 * parseInt(initVal / 1e4), V = parseInt(initVal / 100) - 10 * parseInt(initVal / 1e3), I = parseInt(initVal / 10) - 10 * parseInt(initVal / 100), p = parseInt(initVal / 1) - 10 * parseInt(initVal / 10);
    $(".data-ul li").eq(0).html(t), $(".data-ul li").eq(1).html(a), $(".data-ul li").eq(2).html(i), $(".data-ul li").eq(3).html(e), $(".data-ul li").eq(4).html(l), $(".data-ul li").eq(5).html(n), $(".data-ul li").eq(6).html(r), $(".data-ul li").eq(7).html(s), $(".data-ul li").eq(8).html(V), $(".data-ul li").eq(9).html(I), $(".data-ul li").eq(10).html(p)
}
$.get(requestUrl + "big-data/get-Big-Data-total", function (t) {
    if (200 == t.code) {
        window.initVal = t.result;
        var a = new Date;
        initVal += 10 * (a.getTime() / 1e3 - 1481269210) / 3, getData(), setInterval(function () {
            var t = Math.floor(20 * Math.random());
            initVal += t, getData()
        }, 3e3)
    }
});