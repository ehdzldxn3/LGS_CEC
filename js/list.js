document.addEventListener("DOMContentLoaded", () => {

})

jQuery(function($) {
    // 좌우div(or상하div)를 감싸는 div에 splitter를 정의한다.
    $('#splitter').split({orientation:'horizontal', limit:100});
});

