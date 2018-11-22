alert("Create by Ashot Galstyan");
var matrix = [];
var n = 60;
var side = 10;
var grassArr = [];
var voshxarArr = [];
var gishatichArr = [];
var amenakerArr = [];
var fermerArr = [];
var atomArr = []
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
    //cnv.mouseClicked(atom)
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
            else if (matrix[y][x] == 6) {
                atomArr.push(new Atom(x, y, 6));
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
    for (var i in atomArr) {
        atomArr[i].boom();
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
                else if (matrix[y][x] == 6) {
                    fill("black");
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
function mouseClicked() {
    console.log("asdfadsf")
    
    var x = mouseX;
    var y = mouseY;
    var i = Math.floor(x/side);
    var k = Math.floor(y/side);
    //console.log(i,k)
    matrix[k][i] = 6



    if (matrix[k][i] == 5) {
        for (var i in fermerArr) {
            if (this.x == fermerArr[i].x && this.y == fermerArr[i].y) {
                fermerArr.splice(i, 1);
                this.energy++;
                break;
            }
        }
    }
    if (matrix[k][i] == 4) {
        for (var i in amenakerArr) {
            if (this.x == amenakerArr[i].x && this.y == amenakerArr[i].y) {
                amenakerArr.splice(i, 1);
                this.energy++;
                break;
            }
        }
    }
    if (matrix[k][i] == 3) {
        for (var i in gishatichArr) {
            if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                gishatichArr.splice(i, 1);
                this.energy++;
                break;
            }
        }
    }
    else if (matrix[k][i] == 2) {
        for (var i in voshxarArr) {
            if (this.x == voshxarArr[i].x && this.y == voshxarArr[i].y) {
                matrix[this.y][this.x] = 0;
                voshxarArr.splice(i, 1);
                break;
            }
        }
    }
    else if (matrix[k][i] == 1) {
        for (var i in grassArr) {
            if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                grassArr.splice(i, 1);
                this.energy++;
                break;
            }
        }
    }
    atomArr.push(new Atom(i, k, 6));
}
