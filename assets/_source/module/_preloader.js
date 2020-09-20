const preloadClass = 'fancy-preloading';

const preloader = {
    show: (message = '') => {
        let $preload = $('<p>' + message + '</p>').css({
            'margin-top': '50px',
            'margin-bottom': '-40px',
            'padding-bottom': '',
            'color': '#ddd'
        });

        $.fancybox.open({
            closeExisting: true,
            content: $preload,
            type: 'html',
            smallBtn: false,
            afterLoad: function(instance, current) {
                current.$content.css('background', 'none');
            },
            afterShow: function(instance, current) {
                $('body').addClass(preloadClass);
                instance.showLoading(current);
            },
            afterClose: function(instance, current) {
                $('body').removeClass(preloadClass);
                instance.hideLoading(current);
            }
        });
    },
    hide: () => {
        if ($('body').hasClass(preloadClass)) {
            $.fancybox.getInstance().close();
        }
    }
}

export default preloader