// var rand1 = Math.random();
// var rand1round = Math.round(rand1)
// console.log(rand1round)

// if (rand1round == 0) {
//     setInterval(document.querySelector('div').style.backgroundColor = "yellow", 1000);
// }

function randsColor() {
    var squares = document.getElementsByClassName("square");
    var sqLen = squares.length
    console.log(squares);
    setInterval(function () {
        var randoms = produceRands(sqLen);
        for (var i = 0; i < sqLen; i++) {
            // var rand1 = Math.round(Math.random());
            // console.log(rand1);
            if (randoms[i] == 0) {
                document.querySelectorAll('.square')[i].style.backgroundColor = "white";
            } else {
                document.querySelectorAll('.square')[i].style.backgroundColor = "black";
            }
        }
    }, 2000)


}

randsColor();


var squares = document.getElementsByClassName("square");
function produceRands(x) { 
    var randoms = [...Array(x)].map(() => Math.round(Math.random()));
    return randoms;
    // console.log(randoms)
    // for (var i = 0; i < x; i++) {
    //     console.log(randoms[i])
    // }
}

// produceRands(squares.length);
