alert("Create by Ashot Galstyan");
var matrix = [];
var n = 60;
var side = 10;
var grassArr = [];
var voshxarArr = [];
var gishatichArr = [];
var amenakerArr = [];
var fermerArr = [];
var ex;


function setup() {
    for (var y = 0; y < n; y++) {
        matrix[y] = [];
        for (var x = 0; x < n; x++) {
            matrix[y][x] = random([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 4, 5])
        }
    }
    frameRate(20);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x, y, 1));

            }
            else if (matrix[y][x] == 2) {
                voshxarArr.push(new Voshxar(x, y, 2));

            }
            else if (matrix[y][x] == 3) {
                gishatichArr.push(new Gishatich(x, y, 3));

            }
            else if (matrix[y][x] == 4) {
                amenakerArr.push(new Amenaker(x, y, 4));

            }
            else if (matrix[y][x] == 5) {
                fermerArr.push(new Fermer(x, y, 5));
            }
        }
    }
    // console.log(grassArr);
    // for (var i in grassArr) {
    //     var found = grassArr[i].chooseCell(0);
    //     //console.log(found);
    // }
}
function draw() {
    exanak();
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in voshxarArr) {
        voshxarArr[i].eat();
    }
    for (var i in gishatichArr) {
        gishatichArr[i].eat();

    }
    for (var i in amenakerArr) {
        amenakerArr[i].eat();
    }
    for (var i in fermerArr) {
        fermerArr[i].eat();
    }
}
function exanak() {
    var p = document.getElementById("p");
    //var aui = [0, 255];
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            //Garun
            if (frameCount % 40 > 10 && frameCount % 40 <= 20) {
                if (matrix[y][x] == 1) {
                    fill("#bfff00");
                    rect(x * side, y * side, side, side);

                }
                else if (matrix[y][x] == 2) {
                    fill("yellow");
                    rect(x * side, y * side, side, side);

                }
                else if (matrix[y][x] == 3) {
                    fill("red");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 4) {
                    fill("purple");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 5) {
                    fill("#ffe4c5");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 0) {
                    fill("#acacac");
                    rect(x * side, y * side, side, side);
                }
                ex = "Գարուն";
                p.innerText = "Գարուն";
            }
            //amar
            else if (frameCount % 40 > 20 && frameCount % 40 <= 30) {

                if (matrix[y][x] == 1) {
                    fill("green");
                    rect(x * side, y * side, side, side);

                }
                else if (matrix[y][x] == 2) {
                    fill("yellow");
                    rect(x * side, y * side, side, side);

                }
                else if (matrix[y][x] == 3) {
                    fill("red");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 4) {
                    fill("purple");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 5) {
                    fill("#ffe4c5");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 0) {
                    fill("#acacac");
                    rect(x * side, y * side, side, side);
                }
                ex = "Ամառ";
                p.innerText = "Ամառ";
            }
            //dzmer
            else if (frameCount % 40 > 0 && frameCount % 40 <= 10) {
                if (matrix[y][x] == 1) {
                    fill("white");
                    rect(x * side, y * side, side, side);

                }
                else if (matrix[y][x] == 2) {
                    fill("yellow");
                    rect(x * side, y * side, side, side);

                }
                else if (matrix[y][x] == 3) {
                    fill("red");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 4) {
                    fill("purple");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 5) {
                    fill("#ffe4c5");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 0) {
                    fill("#acacac");
                    rect(x * side, y * side, side, side);
                }
                ex = "Ձմեռ";
                p.innerText = "Ձմեռ";
            }

            //ashun
            else if (frameCount % 40 > 30 && frameCount % 40 <= 40) {

                if (matrix[y][x] == 1) {
                    fill("orange");
                    rect(x * side, y * side, side, side);

                }
                else if (matrix[y][x] == 2) {
                    fill("yellow");
                    rect(x * side, y * side, side, side);

                }
                else if (matrix[y][x] == 3) {
                    fill("red");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 4) {
                    fill("purple");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 5) {
                    fill("#ffe4c5");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 0) {
                    fill("#acacac");
                    rect(x * side, y * side, side, side);
                }
                ex = "Աշուն";
                p.innerText = "Աշուն";
            }
        }
    }
}

