;(function($){
    function Carousel(poster){
        this.poster = poster;
        //默认配置参数
        this.setting = {
            width: 1000,
            height: 270,
            posterWidth: 640,
            posterHeight: 270,
            scale: 0.9,
            speed: 500,
            verticalAlign:"middle"
        };
        $.extend(this.setting,this.getDatasetting());
        console.log(this.setting);
    }
    Carousel.prototype = {
        //设置配置参数值去控制基本的宽度高度
        setSettingValue: function(){

        },
        //获取人工配置参数
        getDatasetting: function(){
            var setting = this.poster.data("setting");
            return setting;
        }

    };
    Carousel.init = function(posters){
        var _this_ = this;

        posters.each(function(){
            new _this_($(this));
        })
    };
    window["Carousel"] = Carousel;

})(jQuery);

$(function(){
    Carousel.init($(".J_Poster"));
});

