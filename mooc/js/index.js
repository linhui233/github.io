$(document).ready(function(){
    var sub = $('#sub')
    var activeRow = $('.shopClass-active');
    var activeMenu = $('#'+ activeRow.data('id'));
    $('#father')
    .on('mouseenter',function(e) {
        sub.removeClass('hide')
    })
    .on('mouseleave',function(e) {
        
    })
    .on('mouseenter','dl',function(e) {
        if(!activeRow) {
            //this和e.target 区别
            //this指代当前dl对象,
            //e.target指向当前dom事件对象，可能为dl,dd,dt
            //若在此处使用e.target替换this则当鼠标快速移动到dl下的dt元素时。
            //只为dt元素添加active，与预期不符
            //使用this,则只会对当前dl对象添加active
            activeRow = $(this).addClass('shopClass-active');//指向事件目标e.target
            activeMenu = $('#'+ activeRow.data('id'));
            console.log(activeMenu);
            activeMenu.removeClass('hide');
            return;
        }

        activeRow.removeClass('shopClass-active');
        activeMenu.addClass('hide');

        activeRow  = $(this);
        activeRow.addClass('shopClass-active');
        activeMenu = $('#'+activeRow.data('id'));
        activeMenu.removeClass('hide');
    })
})