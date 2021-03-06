function GetQueryString(e) {
    var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"), a = window.location.search.substr(1).match(t);
    return null != a ? unescape(a[2]) : null
}
var time = (new Date).getTime() - 864e5, yesterDay = new Date(time);
yesterDay = yesterDay.getFullYear() + "-" + (yesterDay.getMonth() + 1) + "-" + yesterDay.getDate(), $(".chart-time .date").html(yesterDay);
var num = GetQueryString("id") - 1;
switch (num) {
    case 0:
        townLayout()
        // townRate();
        break;
    case 1:
        chinaTownNumber();
        break;
    case 2:
        felling();
        break;
    case 3:
        // economyIndustry();
        break;
    case 4:
        // scale();
        break;
    case 5:
        // pmData();
        break;
    case 6:
        // facility();
        break;
    case 7:
        // getTownViewDistribute();
        break;
    case 8:
        // transportationAccess();
        break;
    case 9:
        // invest_contrast();
        break;
    case 10:
        getHotWordsLeft(), $("#hot-words-right").hide(), $(".hot-words-content-left").css({left: "250px"});
        break;
    case 11:
        getProjectsLeft(), $("#projects-right").hide(), $("p.project-toggle").hide();
        break;
    default:
        getRunModelLeft(), $("#run-model-right").hide()
}
$(".big-data-detail .content-left li").eq(num).addClass("active").siblings("li").removeClass("active"), $(".content-right li").hide(), $(".content-right li").eq(num).show(), $(".big-data-detail .content-left li").click(function () {
    var e = $(this).index();
    switch ($(this).addClass("active").siblings("li").removeClass("active"), $(".content-right li").hide(), $(".content-right li").eq(e).show(), e++, window.history.replaceState(null, "", "bigdatas-detail.html?id=" + e), e - 1) {
        case 0:
            townLayout()
            // townRate();
            break;
        case 1:
            chinaTownNumber(), $(".province-towns-amount-tab span").eq(1).addClass("active").siblings("span").removeClass("active"), $("#province-town-ranking .province-town-single").eq(1).show().siblings(".province-town-single").hide();
            break;
        case 2:
            felling(), $(".public-sentiment-tab span").eq(1).addClass("active").siblings("span").removeClass("active");
            break;
        case 3:
            economyIndustry();
            break;
        case 4:
            scale();
            break;
        case 5:
            pmData(), $(".pm-data-tab span").eq(1).addClass("active").siblings("span").removeClass("active");
            break;
        case 6:
            facility(), $(".service-facility-tab span").eq(1).addClass("active").siblings("span").removeClass("active");
            break;
        case 7:
            getTownViewDistribute();
            break;
        case 8:
            transportationAccess();
            break;
        case 9:
            invest_contrast();
            break;
        case 10:
            getHotWordsLeft(), $(".hot-words-tab span").eq(1).addClass("active").siblings("span").removeClass("active"), $("p.weixin-toggle,p.word-param,#hot-words-right").hide(), $(".hot-words-content-left").css({left: "250px"});
            break;
        case 11:
            getProjectsLeft(), $("#projects-right").hide(), $("#projects-left").css({marginLeft: "165px"}), $("p.project-toggle").hide(), $("p.word-param").html("");
            break;
        default:
            getRunModelLeft(), $("#run-model-right").hide()
    }
}), $(".province-towns-amount-tab span").click(function () {
    var e = $(this).index();
    $(".province-town-single").eq(e).show().siblings(".province-town-single").hide(), 0 == e ? chinaTownNumberY() : 1 == e ? chinaTownNumber() : chinaTownNumberN()
}), $(".public-sentiment-tab span").click(function () {
    var e = $(this).index();
    0 == e ? fellingY() : 1 == e ? felling() : fellingN()
}), $(".pm-data-tab span").click(function () {
    var e = $(this).index();
    0 == e ? pmDataY() : 1 == e ? pmData() : pmDataN()
}), $(".service-facility-tab span").click(function () {
    var e = $(this).index();
    0 == e ? facilityY() : 1 == e ? facility() : facilityN()
}), $(".hot-words-tab span").click(function () {
    var e = $(this).index();
    $("#hot-words-right").hide(), $("p.word-param").html(""), $(".hot-words-content-left").animate({left: "250px"}), 0 == e ? getHotWordsLeftDec() : 1 == e ? getHotWordsLeft() : getHotWordsLeftInc()
}), $(".industry-location i").eq(0).click(function () {
    economyIndustry()
}), $(".industry-location i").eq(1).click(function () {
    economyCity()
}), $("p.weixin-toggle").click(function () {
    $(".hot-words-content-left").animate({left: "250px"}), $("#hot-words-right").html(""), $(this).fadeOut(), $("p.word-param").fadeOut()
}), $(".content-right p.project-toggle").click(function () {
    $("#projects-left").animate({marginLeft: "190px"}), $("#projects-right").fadeOut(), $(this).fadeOut()
});