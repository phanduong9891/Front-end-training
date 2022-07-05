const marker1 = document.getElementById('marker-okr1');
const marker2 = document.getElementById('marker-okr2');
const marker3 = document.getElementById('marker-okr3');
const progressBar = document.getElementById('progress-bar');


function slider01 () {
    let okr1Value = document.getElementById('range-okr1').value;
    // console.log(okr1Value);
    marker1.innerText= okr1Value;
    marker1.style.positon='absolute';
    marker1.style.left=okr1Value+"%";
    changeValueProgressBar();
}
function slider02 () {
    let okr2Value = document.getElementById('range-okr2').value;
    // console.log(okr1Value);
    marker2.innerText= okr2Value;
    marker2.style.positon="absolute";
    marker2.style.left=okr2Value+"%";
    changeValueProgressBar();
}
function slider03 () {
    let okr3Value = document.getElementById('range-okr3').value;
    // console.log(okr3Value);
    marker3.innerText= okr3Value;
    marker3.style.positon="relative";
    marker3.style.left=okr3Value+"%";
    changeValueProgressBar();
}


function changeValueProgressBar() {
    let okr1Value = parseInt(document.getElementById('range-okr1').value);
    let okr2Value = parseInt(document.getElementById('range-okr2').value);
    let okr3Value = parseInt(document.getElementById('range-okr3').value);
    let currentValue = (okr1Value+okr2Value+okr3Value)/3;
    console.log(currentValue+"%");
    progressBar.style.width=currentValue+"%";
}