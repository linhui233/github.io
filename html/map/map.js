
//动态计算font-size
(function (win, doc) {
    var docEl = doc.documentElement
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
    var recalc = function () {
            var clientWidth = docEl.clientWidth;
            docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
        };

    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(window, document)


window.onload = function () {//等待页面加载完资源后(样式等)
    //导航
    var barBtns = document.getElementsByClassName("bar-btns")[0].children
    Array.prototype.forEach.call(barBtns, function (btn, idx) {
        btn.onclick = function () {
            for(let i=0; i<barBtns.length; i++) {
                barBtns[i].classList.remove('checked')
            }
            btn.classList.add('checked')
            scrollByIndex(idx)
        }

    })


    //搜索框下拉
    var sls = document.querySelector(".select-list").children
    Array.prototype.forEach.call(sls, function (sl, idx) {
        sl.onclick = function () {
            var suffix = document.querySelector(".suffix")
            suffix.innerText = '.' + sl.innerText
        }
    })

    var openBtns = document.getElementsByClassName("know-title-btn")
    var openLis = document.getElementsByClassName("know-li")
    Array.prototype.forEach.call(openBtns, function (btn,idx) {
        btn.onclick = function () {
            if(!btn.classList.contains("opened")){
                btn.classList.add("opened")
                btn.innerText = '-'
                console.log(idx)
                openLis[idx].querySelector(".know-text").style.display = 'block'
            }else{
                console.log(1)
                btn.classList.remove("opened")
                btn.innerText = '+'
                openLis[idx].querySelector(".know-text").style.display = 'none'
            }
        }
    })
    
}
function scrollByIndex(index) {
    var moduleHeights = {
        'banner': 330,
        'main': 1983,
        'service': 616,
        'activity': 382
    }
    console.log(index)
    if(index === 0){
        window.scrollTo(0,moduleHeights.banner)
    }
    if(index === 1){
        window.scrollTo(0, moduleHeights.banner + moduleHeights.main )
    }
    if(index === 2){
        window.scrollTo(0, moduleHeights.banner + moduleHeights.main + moduleHeights.service)
    }
    if(index === 3){
        window.scrollTo(0, moduleHeights.banner + moduleHeights.main + moduleHeights.service + moduleHeights.activity)
    }
}
function searchChange() {
    var sl = document.querySelector(".select-list")
    if(sl.style.display === 'none'){
        sl.style.display = 'block'
    }else{
        sl.style.display = 'none'
    }
}
function searchDomain () {
    var suffixArr = ['xyz','cn','net']
    var prompt = document.querySelector(".prompt")
    var suffix = document.querySelector(".suffix") 
    var domainText = document.querySelector("#domainText").value

    if(prompt.style.display !== 'block'){
        prompt.style.display = 'block'
    }
    var resDomain = document.querySelectorAll(".res-domain")
    for(let i=0; i<resDomain.length; i++) {
        resDomain[i].innerText = domainText + '.' + suffixArr[i]
    }
}