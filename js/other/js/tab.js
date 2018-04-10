function $(id){
    return typeof id==='string'?document.getElementById(id):"";
}
window.onload = function(){
    //鼠标滑过切换tab
    var tabs = $('notice-tit').getElementsByTagName('li');
    var cons = $('notice-con').getElementsByTagName('div');
    for(var i in tabs){
        tabs[i].index = i;
        tabs[i].onmouseover = function(){
            //先清空
            for(var j=0;j<tabs.length;j++){
                tabs[j].classList.remove('select');
                cons[j].style.display = 'none';
            }

            this.className = 'select';
            cons[this.index].style.display = 'block';
        }
    }
    //同时切换内容
}