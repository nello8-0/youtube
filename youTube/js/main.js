let input = document.getElementById('textInput');
let closes = document.getElementById('close');
let icons =  document.getElementById('icon'); 

closes.onclick = function() {
    input.value = " ";
}

input.onkeydown = function() {
    if (input.value == " ") {
        closes.style.opacity = 0;
    } else {
        closes.style.opacity = 1;
    }
}

closes.onmousedown = function() {
    closes.style.opacity = 0;
}

let list = document.getElementById('list');
let acc = document.getElementById('acc');

acc.onclick = function() {
    list.style.display = 'block';
}

acc.ondblclick = function() {
    list.style.display = 'none';
}

let tap =document.getElementById('tap');
let side = document.getElementById('side_2');
let side1 = document.getElementById('side_1');

tap.onclick = function() {
    side1.style.display = 'none';
    side.style.display = 'block';
}

window.ondblclick = function() {
    side.style.display = 'none';
    side1.style.display = 'block';
}

