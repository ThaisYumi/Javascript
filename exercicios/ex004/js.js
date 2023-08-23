var res = document.getElementById(`res`);
var s = 1;
var c = 0;
function gerar() {
    var num = Number(document.getElementById(`num`).value)
    res.innerHTML = "";
    for(c=0; c<=10; c++) {
        var m = num * c;
        res.innerHTML += `${num} X ${c} = ${m}<br>`;
    }
}
