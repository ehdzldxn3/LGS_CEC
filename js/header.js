document.addEventListener("DOMContentLoaded", () => {

    let btn_terminal = document.querySelector('.btn-terminal')
    
    btn_terminal.addEventListener('click', (e) => {

        var url = "../page/terminal_popup.html";
        var name = "Terminal";
        var option = "width = 700, height = 700, top = 100, left = 200, location = no"
        window.open(url, name, option);
    })

    var url = "../page/terminal_popup.html";
    var name = "Terminal";
    var option = "width = 700, height = 700, top = 100, left = 200, location = no"
    window.open(url, name, option);
    
})