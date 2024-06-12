const temp_converter = (val_num) => {
    document.getElementById("output_celcius").innerHTML =  (val_num - 32)/1.8;
}

const change_text_color = () => {
    document.getElementById("temp_converter").style.color = "blue";
}

const get_current_date = () => {
    var date_ = new Date();
    date_format = [date_.getDate(),
        date_.getMonth()+1,
        date_.getFullYear()].join('/') + " " +
        [date_.getHours(),
            date_.getMinutes(),
            date_.getSeconds()].join(':');
    document.getElementById("date").innerHTML = date_format;
}

const email_validation = () => {
    var input_text = document.getElementById('email').value;
    const mail_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mail_format.test(input_text)) {
        return true;
    }
    alert("Invalid email address!");
    return false;
}

const phone_validation = () => {
    var input_phonenum = document.getElementById('phonenum').value;
    const phone_format = /^\d{12,13}$/;
    if (phone_format.test(input_phonenum)) {
        return true;
    }
    alert("Only receive number format with minimum 12 digits and maximum 13 digits!");
    return false;
}

const message_submit = () => {
    alert("Email successfully submitted!");
}

const form_validation = () => {
    if (email_validation() && phone_validation()) {
        message_submit();
        return true
    }
        return false
}


