var pos = 0;
var flag = false;

function doit() {
    document.form.textview1.value = "= " + eval(document.form.textview.value);
}

function insert(num) {
    var count = 0;
    switch (num) {
        case '+':
        case '-':
        case '*':
        case '/':
            pos = document.form.textview.value.length + 1;
            flag = true;
            break;
        default:
            if (document.form.textview1.value == "" && flag == false) clear1();
    }
    if (num == '.')
        for (var i = pos; i < document.form.textview.value.length; i++)
            if (document.form.textview.value.charAt(i) == '.') count++;
    if ((num == '.' && count == 0) ^ num != '.') document.form.textview.value = document.form.textview.value + num;
    doit();
}

function equals() {
    document.form.textview1.value = "";
    document.form.textview.value = eval(document.form.textview.value);
    document.form.textview.value = document.form.textview.value.substring(0, 8);
    flag = false;
}

function bksp() {
    document.form.textview.value = document.form.textview.value.substring(0, document.form.textview.value.length - 1);
    doit();
}

function clear1() {
    document.form.textview.value = "";
    document.form.textview1.value = "";
}

function enterpressalert(e, textarea) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) {
        document.form.eq.click();
        event.preventDefault();
    } else {
        doit();
        event.preventDefault();
    }
}