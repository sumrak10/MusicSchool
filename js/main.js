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
    var link = "mailto:babaevi@mail.ru" //кому
             + "?cc=" + email //от кого
             + "&subject=" + "Новая заявка!" //тема
             + "&body=" + "Имя и фамилия:" + name + "  Контакты" + contact + "  Иструмент:" + instrument; //текст
    window.location.href = link;
    return false;
};