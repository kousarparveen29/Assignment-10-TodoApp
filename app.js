var today = new Date();
// Get Date
var date = today.getDate();
var month = today.getMonth();
var year = today.getFullYear();

var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var dy = "";
var dt = "";
for (var i = 0; i < monthName.length; i++) {
    if (month == i) {
        dt = date + "/" + monthName[i] + "/" + year;
    }
}

// Get Day
var day = today.getDay();
var dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
for (var i = 0; i < dayName.length; i++) {
    if (day == i) {
        dy = dayName[i];
    }
}

document.getElementById("dateDay").innerHTML = dt + "  " + dy;

// Get Time
setInterval(function () {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();

    var format = "";
    if (hr < 12) {
        format = "AM";
    }
    else {
        format = "PM";
    }
    if (hr == 0) {
        hr = 12;
    }
    if (hr > 12) {
        hr = hr - 12;
    }
    document.getElementById("hr").innerHTML = value(hr);
    document.getElementById("min").innerHTML = value(min);
    document.getElementById("sec").innerHTML = value(sec);
    document.getElementById("format").innerHTML = format;
}, 1)

function value(t) {
    if (t <= 9) {
        t = "0" + t;
    }
    return t;
}

// Hours Select Function

var selectHr = document.getElementById("hrs");

for(var i = 1; i <= 12; i++){
    var optionHr = "<option value='" + value(i) + "'>" + value(i) + "</option>";
    selectHr.innerHTML += optionHr;
}

// Minutes Select Function

var selectMin = document.getElementById("mint");

for(var i = 0; i <= 60; i++){
    var optionMin = "<option value='" + value(i) + "'>" + value(i) + "</option>";
    selectMin.innerHTML += optionMin;
}

// Button Add Function

function btnAdd() {
    var selectHr = document.getElementById("hrs");
    var selectMin = document.getElementById("mint");
    var select = document.getElementById("ampm");
    var todo = document.getElementById("work");
    if(todo.value != ""){

    //Create Columns
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");

    var td2Text = document.createTextNode(selectHr.value + ":" + selectMin.value + " " + select.value)
    var td3Text = document.createTextNode(todo.value);
    var db = document.createElement("button");
    var chbx = document.createElement("input");
    var icon = document.createElement("i");
    
    chbx.setAttribute("type", "checkbox");
    chbx.setAttribute("onclick", "check(this)");
    icon.setAttribute("class", "fa fa-trash-o");
    icon.setAttribute("aria-hidden", "true");
    icon.setAttribute("onclick", "deletItem(this)");
    
    db.appendChild(icon);
    td1.appendChild(chbx);
    td2.appendChild(td2Text);
    td3.appendChild(td3Text);
    td4.appendChild(db);

    //Create Row
    var rw = document.createElement("tr");
    rw.appendChild(td1);
    rw.appendChild(td2);
    rw.appendChild(td3);
    rw.appendChild(td4);

    var tab = document.getElementById("tab");
    tab.appendChild(rw);
    
    selectHr.value = selectHr.firstChild.value;
    selectMin.value= selectMin.firstChild.value;
    select.value = select.firstChild.value;
    todo.value = "";
    }
}

// Button Delete Function

function deletItem(dl){
    dl.parentNode.parentNode.parentNode.remove();
}

// Button Delete All Function


function deletAll(){
    var tab = document.getElementById("tab");
    tab.innerHTML = "";
}

// Checkbox Functionality

function check(ch){
    var chItem = ch.parentNode.parentNode.getElementsByTagName("td");
    if(ch.checked){
        chItem[1].style.color = "#999999";
        chItem[1].style.textDecoration = "line-through";
        chItem[2].style.color = "#999999";
        chItem[2].style.textDecoration = "line-through";
    }
    else{
        chItem[1].style.color = "white";
        chItem[1].style.textDecoration = "none";
        chItem[2].style.color = "white";
        chItem[2].style.textDecoration = "none";
    }
}


