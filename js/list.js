document.addEventListener("DOMContentLoaded", () => {


    

    $('#splitter').split({
        orientation: 'horizontal',
        limit: 100,
    });


    let detail_menu_item = document.querySelectorAll('.detail-menu-item')
    let info_box = document.querySelectorAll('.server')
    let module_item = document.querySelectorAll('.module-item')
    let module_desc_box = document.querySelectorAll('.module-desc-box')

    detail_menu_item.forEach((item,index) => {

        item.addEventListener('click', (e) => {
            detail_menu_item.forEach((item, index) => {
                if(item.classList.contains('detail-select'))item.classList.remove('detail-select')    
            })
            
            info_box.forEach((item,index) => {
                if(!item.classList.contains('hide')) item.classList.add('hide')
            })
            if(info_box[index].classList.contains('hide'))info_box[index].classList.remove('hide')

            item.classList.add('detail-select')
        })
    })


    module_item.forEach((item, index) => {
        item.addEventListener('click', (e) => {

            module_item.forEach((item, index) => {
                if(item.classList.contains('module-select')) item.classList.remove('module-select')
            })

            
            module_desc_box.forEach((item, index) => {
                if(!item.classList.contains('hide'))item.classList.add('hide')
            })

            module_desc_box[index].classList.remove('hide')
            item.classList.add('module-select')
        })
    })
    
})


