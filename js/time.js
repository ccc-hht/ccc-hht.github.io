function ShowTime() {　
    var NowDate = new Date();　
    var y = NowDate.getFullYear();
    var M = NowDate.getMonth();
    var d = NowDate.getDate();
    var h = NowDate.getHours();　
    var m = NowDate.getMinutes();　
    var s = NowDate.getSeconds();　　
    document.getElementById('showbox').innerHTML = y + '年' + (M + 1) + '月' + d + '日' + h + '時' + m + '分' + s + '秒';　
    setTimeout('ShowTime()', 1000);
}