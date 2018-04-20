$(function() {
    var page = 1;//当前页
    var i = 4;//一页显示4张图片
    var $video_title = $('.video-title');
    $('span.next').click(function() {
        var $main = $(this).parents('.main');
        var $video_list = $main.find('.video-list');
        var $video_list_remove = $video_list.find('.video-list-move');
        
        var list_width = $video_list.width();
        
        var len = $video_list.find('li').length;
        var page_count = Math.ceil(len/i);
        if(!$video_list.is(":animated")) {
            if(page === page_count) {
                $video_list_remove.animate({left: '0px'}, "slow");
                page = 1;
            }else {
                $video_list_remove.animate({left: '-='+list_width},"slow");
                page++;
            }
            console.log($main.find(".video-title").find('li'));
            
            $main.find(".video-title").find('li').eq((page-1)).addClass("current")
                .siblings().removeClass("current");
                
        }
    })
    $('span.prev').click(function() {
        var $main = $(this).parents('.main');
        var $video_list = $main.find('.video-list');
        var $video_list_remove = $video_list.find('.video-list-move');
        
        var list_width = $video_list.width();
        
        var len = $video_list.find('li').length;
        var page_count = Math.ceil(len/i);
        if(!$video_list.is(":animated")) {
            if(page === 1) {
                $video_list_remove.animate({left: '-='+list_width*(page_count-1)}, "slow");
                page = page_count;
            }else {
                $video_list_remove.animate({left: '+='+list_width},"slow");
                page--;
            }
            console.log($main.find(".video-title").find('li'));
            
            $main.find(".video-title").find('li').eq((page-1)).addClass("current")
                .siblings().removeClass("current");
                
        }
    })
})