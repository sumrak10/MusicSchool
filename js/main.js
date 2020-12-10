document.addEventListener("DOMContentLoaded", () => {
    document.getElementsByClassName('burger')[0].addEventListener("click", (e) => {
        if (document.getElementsByClassName('menu')[0].style.display == "flex"){
            document.getElementsByClassName('burger')[0].classList.remove("burger-active")
            document.getElementsByClassName('menu')[0].style.display = "none"
            document.getElementsByClassName('menu')[0].classList.remove("resp-menu")
        }
        else {
            document.getElementsByClassName('burger')[0].classList.add("burger-active")
            document.getElementsByClassName('menu')[0].style.display = "flex"
            document.getElementsByClassName('menu')[0].classList.add("resp-menu")
        }
    })
})

function sendMail() {
    var link = "mailto:babaevi@mail.ru" //кому
             + "?cc=nurlan.urazkulov@gmail.com" //от кого
             + "&subject=" + encodeURIComponent("This is my subject") //тема
             + "&body=" + encodeURIComponent(document.getElementById('myText').value); //текст
    window.location.href = link;
}

document.forms.reg.onsubmit = function() {
    var name = this.name.value;
    var contact = this.contact.value;
    var email = this.email.value;
    var instrument = this.instrument.value;
    var link = "mailto:musicmodule@mail.ru" //кому
             + "?cc=" + email //от кого
             + "&subject=" + "Новая заявка!" //тема
             + "&body=" + "Имя и фамилия:" + name + "  Контакты" + contact + "  Инструмент:" + instrument; //текст
    window.location.href = link;
    return false;
};