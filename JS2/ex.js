/************* Donnéées**********************/
var btn;
var rec;
var btn1;
/**********Function ***********/


function onClickBotton() {
    if (rec.classList.contains('hide')) {

        rec.classList.remove('hide');
    } else {
        rec.classList.add('hide');
    }
}

function firebrick() {
    rec.classList.add("important");
}

function green() {

    if (rec.classList.contains('good')) {
        rec.classList.remove("good");
    } else {
        rec.classList.add("good");
    }
}

function blue() {
    rec.classList.remove("important");
}

function agrandir() {
    if ((document.querySelector('.rectangle').style.height = (300 + "px")) && (document.querySelector('.rectangle').style.width = (400 + "px"))) {
        document.querySelector('.rectangle').style.height = (300 + (300 * 10 / 100)) + "px";
        document.querySelector('.rectangle').style.width = (400 + (400 * 10 / 100)) + "px";

    }
}


/**************code principale *************/

btn = document.getElementById('toggle-rectangle');

rec = document.querySelector('.rectangle');

btn1 = document.querySelector('#taille');



btn.addEventListener('click', onClickBotton);

rec.addEventListener('mouseover', firebrick);

rec.addEventListener('mouseout', blue);

rec.addEventListener('dblclick', green);

btn1.addEventListener('click', agrandir);