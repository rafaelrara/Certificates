let txt;

function showTimer(){
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    m = zero(m);
    s = zero(s);

    txt = h + ":" + m + ":" + s;
    document.querySelector(".timer").innerHTML= txt;
}

function zero(x){
    if (x < 10){
        x = '0' + x;
    }return x;
}

let timer = setInterval(showTimer, 1000);
console.log(aleatorio);