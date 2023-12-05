function validate() {
    let name = document.getElementById("name");
    let phone = document.getElementById("phone");
    let id = document.getElementById("ID-Card");
    let facultet = document.getElementById("facultet");
    let date = document.getElementById("date");
    
    
    var name_reg = /^[\p{L}\.]{1,}[\p{Zs}\.]{1}[\p{L}\.]{1,}[\p{Zs}\.]{1}[\p{L}\.]{1,}$/u;
    var phone_reg = /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
    var ID_reg = /^№\d{6}$/;
    var facultet_reg = /^[\p{L}a-zA-Z]{4}$/u;
    var date_reg = /^(0[1-9]|1[0-9]|2[0-9]|3[01])[\/\-.](0[1-9]|1[0-2])[\/\-.]\d{4}$/;
    

        if (!name_reg.test(name.value)) {
            name.style.border = "2px solid red";
        return false;
        }
        else {
            name.style.border = " 1px solid #CACACA";
        }
        if (!phone_reg.test(phone.value)) {
            phone.style.border = "2px solid red";
        return false;
        }
        else {
            phone.style.border = " 1px";
        }
        if (!ID_reg.test(id.value)) {
            id.style.border = "2px solid red";
        return false;
        }
        else {
            id.style.border = " 1px solid #CACACA";
        }
       
        if (!facultet_reg.test(facultet.value)) {
            facultet.style.border = "2px solid red";
        return false;
        }
        else {
            facultet.style.border = " 1px solid #CACACA";
        }
        if (!date_reg.test(date.value)) {
            date.style.border = "2px solid red";
            return false;
            }
            else {
            date.style.border = " 1px solid #CACACA";
            
            alert('Вивід: ' + '\n' + 'ПІБ:' +  name.value +  '\n' + 'Телефон:' + phone.value + '\n'+ 'ID-Картка: ' + id.value + '\n' + 'Факультет: ' + facultet.value + '\n' + 'Дата народження: ' + date.value)
            }
}
    
    
    
    