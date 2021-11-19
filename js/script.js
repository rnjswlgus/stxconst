window.onload = function() {
    $(document).ready(function() {

        // 위로가기
        $('.gotop').click(function() {
            $('html, body').animate({
                scrollTop: 0
            });
        });

        
        //모달창
        let modal = $('.modal');
        let modal_cont = $('.modal-cont');
        let modal_close = $('.modal-close');

        //modal을 마우스로 클릭하면 사라짐.
        modal.click(function() {
            modal.fadeOut();
        });

        //modal-cont를 마우스로 클릭하면 사라짐.
        modal_close.click(function() {
            modal.fadeOut();
        });

        //modal-cont는 그냥 있어.
        modal_cont.click(function(event) {
            event.stopPropagation();
        });

    });
};