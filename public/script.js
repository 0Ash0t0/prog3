var socket = io.connect('http://localhost:4444');
var kadr = {
    "xotakeriqanak": 0,
    "xotiqanaky": 0,
    "gishatichiqanak" : 0,
    "fermeriqanak" : 0,
    "amenakeriqanak" : 0,
    "specialevntiqanak" : 0


};
var specialevnt = 0;
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
var socket = io.connect('http://localhost:4444');

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
            else if (matrix[y][x] == 6) {
                atomArr.push(new Atom(x, y, 6));
            }
        }
    }
}
function draw() {
    exanak();
    if (frameCount % 500 === 0) {
        function changeView(stat) {
            var c = document.getElementById("xotakeriqanak");
            var k = document.getElementById("xotiqanaky");
            var g = document.getElementById("gishatichiqanak");
            var v = document.getElementById("fermeriqanak");
            var d = document.getElementById("amenakeriqanak");
            var b = document.getElementById("specialevntiqanak");
            c.innerHTML = stat.xotakeriqanak;
            k.innerHTML = stat.xotiqanaky;
            g.innerHTML = stat.gishatichiqanak;
            v.innerHTML = stat.fermeriqanak;
            d.innerHTML = stat.amenakeriqanak;
            b.innerHTML = stat.specialevntiqanak;
        }
    
            function handleSubmit(evt) {
                kadr.xotakeriqanak = voshxarArr.length;
                kadr.xotiqanaky = grassArr.length;
                kadr.gishatichiqanak = gishatichArr.length;
                kadr.fermeriqanak = fermerArr.length;
                kadr.amenakeriqanak = amenakerArr.length;
                kadr.specialevntiqanak = specialevnt;
                changeView(kadr);
                socket.emit("send data", kadr);
               
            }
            handleSubmit(kadr);
    }
    // for (var i in grassArr) {
    //     grassArr[i].mul();
    // }
    // for (var i in voshxarArr) {
    //     voshxarArr[i].eat();
    // }
    // for (var i in gishatichArr) {
    //     gishatichArr[i].eat();
    // }
    // for (var i in amenakerArr) {
    //    amenakerArr[i].eat();
    // }
    // for (var i in fermerArr) {
    //     fermerArr[i].eat();
    // }

}
function exanak() {
    var p = document.getElementById("p");
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
    specialevnt++;

    var x = mouseX;
    var y = mouseY;
    x = Math.floor(x / side);
    y = Math.floor(y / side);
    
    if (x > n) {
        x = n
    }
    else if (y > n) {
        y = n
    }
    else if (x <= 0){
        x = 0 
    }
    else if (y <= 0){
        y = 0 
    }
    if (matrix[y][x] == 5) {
        for (var i in fermerArr) {
            if (x == fermerArr[i].x && y == fermerArr[i].y) {
                fermerArr.splice(i, 1);
                break;
            }
        }
    }
    else if (matrix[y][x] == 4) {
        for (var i in amenakerArr) {
            if (x == amenakerArr[i].x && y == amenakerArr[i].y) {
                amenakerArr.splice(i, 1);
                break;
            }
        }
    }
    else if (matrix[y][x] == 3) {
        for (var i in gishatichArr) {
            if (x == gishatichArr[i].x && y == gishatichArr[i].y) {
                gishatichArr.splice(i, 1);
                break;
            }
        }
    }
    else if (matrix[y][x] == 2) {
        for (var i in voshxarArr) {
            if (x == voshxarArr[i].x && y == voshxarArr[i].y) {
                voshxarArr.splice(i, 1);
                break;
            }
        }
    }
    else if (matrix[y][x] == 1) {
        for (var i in grassArr) {
            if (x == grassArr[i].x && y == grassArr[i].y) {
                grassArr.splice(i, 1);
                break;
            }
        }
    }
    matrix[y][x] = 6
    atomArr.push(new Atom(x, y, 6));
    for (var i in atomArr) {
        atomArr[i].boom();
    }
}
