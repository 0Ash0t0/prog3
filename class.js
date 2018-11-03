class Grass {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(c) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == c) {
                    found.push([x, y]);
                }
            }
        }
        return found;
    }

    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        // console.log(emptyCells);
        if (newCell && this.multiply >= 5) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.index;

            var newGrass = new Grass(newX, newY, this.index);
            grassArr.push(newGrass);
            this.multiply = 0;
        }
    }
}

class voshxar {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.index = index;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(c) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == c) {
                    found.push([x, y]);
                }
            }
        }
        return found;
    }
    eat() {
        this.getNewCoordinates();
        var grassCells = this.chooseCell(1);
        var newCell = random(grassCells);
        if (newCell && this.energy > 0) {
            matrix[this.y][this.x] = 0;

            matrix[newCell[1]][newCell[0]] = 2;
            this.x = newCell[0];
            this.y = newCell[1];
            for (var i in grassArr) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            this.energy++;
        }
        else {
            this.move();

        }
        if (this.energy == 10) {
            this.mul();
        }

        else if (this.energy <= 0) {
            this.die();
        }
    }
    move() {
        var emptyCells = this.chooseCell(0);
        //console.log(emptyCells);
        var newCell = random(emptyCells);
        // console.log(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;

            this.x = newX;
            this.y = newY;
            this.energy--;
        }

    }
    die() {
        for (var i in voshxarArr) {
            if (this.x == voshxarArr[i].x && this.y == voshxarArr[i].y) {
                matrix[this.y][this.x] = 0;
                voshxarArr.splice(i, 1);
                break;
            }
        }
    }
    mul() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        // console.log(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.index;

            var newVoshxar = new voshxar(newX, newY, this.index);
            voshxarArr.push(newVoshxar);
            this.energy = 7;
        }
    }
}
class gishatich {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 7;
        this.index = index;

    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(c) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == c) {
                    found.push([x, y]);
                }
            }
        }
        return found;
    }
    move() {
        var emptyCells = this.chooseCell(0);
        //console.log(emptyCells);
        var newCell = random(emptyCells);
        // console.log(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;

            this.x = newX;
            this.y = newY;
           
        }
        this.energy--;
    }
    mul() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        // console.log(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.index;

            var newGishatich = new gishatich(newX, newY, this.index);
            gishatichArr.push(newGishatich);
            this.energy = 7;
        }
    }
    eat() {
        this.getNewCoordinates();
        var gishatichCells = this.chooseCell(2);
        var newCell = random(gishatichCells);
        if (newCell) {
            matrix[this.y][this.x] = 0;


            matrix[newCell[1]][newCell[0]] = 3;

            for (var i in voshxarArr) {

                if (newCell[0] == voshxarArr[i].x && newCell[1] == voshxarArr[i].y) {
                    voshxarArr.splice(i, 1);
                    break;
                }
            }
            this.x = newCell[0];
            this.y = newCell[1];

            this.energy++;
        }
        else {
            this.move();

        }
        if (this.energy >= 7) {
            this.mul();
        }
        else if (this.energy <= 0) {
            this.die();
        }
        // console.log(this.energy);
    }
    die() {
        for (var i in gishatichArr) {
            if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                matrix[this.y][this.x] = 0;
                gishatichArr.splice(i, 1);
                break;
            }
        }
    }
}
class amenaker {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 30;
        this.index = index;

    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCellmul(arr) {
        this.getNewCoordinates();
        var found = [];
        var a = arr;
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                for (var i = 0; i < a.length; i++) {
                    if (matrix[y][x] == a[i]) {
                        found.push([x, y]);
                    }
                }
            }
        }
        return found;
    }
    move() {
        var emptyCells = this.chooseCellmul([0, 1, 2, 3]);
        //console.log(emptyCells);
        var newCell = random(emptyCells);
        // console.log(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;

            this.x = newX;
            this.y = newY;
            this.energy -= 2;
        }
    }
    eat() {
        this.getNewCoordinates();
        var foodCells = this.chooseCellmul([1, 2, 3]);
        var newCell = random(foodCells);
        if (newCell) {
            matrix[this.y][this.x] = 0;
            if (matrix[newCell[1]][newCell[0]] == 3) {
                for (var i in gishatichArr) {
                    gishatichArr.splice(i, 1);
                    //console.log("kerav gishatich");
                    this.energy++;
                    break;
                }
            }
            else if (matrix[newCell[1]][newCell[0]] == 2) {
                for (var i in voshxarArr) {
                    voshxarArr.splice(i, 1);
                    //console.log("kerav voshxar");
                    this.energy++;
                    break;
                }
            }
            else if (matrix[newCell[1]][newCell[0]] == 1) {
                for (var i in grassArr) {
                    grassArr.splice(i, 1);
                    // console.log("kerav xot");
                    this.energy++;
                    break;
                }
            }
            matrix[newCell[1]][newCell[0]] = 4;
            this.x = newCell[0];
            this.y = newCell[1];
        }
        if (this.energy >= 0 || this.energy <= 0) {
            this.move();
        }
    }
}
class fermer {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.a = 0;
        this.energy = 10;
        this.index = index;
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    chooseCellmul(arr) {
        this.getNewCoordinates();
        var found = [];
        var a = arr;
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                for (var i = 0; i < a.length; i++) {
                    if (matrix[y][x] == a[i]) {
                        found.push([x, y]);
                    }
                }
            }
        }
        return found;
    }

    move() {
        var emptyCells = this.chooseCellmul([0, 1, 4]);
        //console.log(emptyCells);
        var newCell = random(emptyCells);
        // console.log(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            if (matrix[newY][newX] == 0) {
                if (this.a <= 10) {
                    matrix[this.y][this.x] = 1;
                    matrix[newY][newX] = 5;
                    var newGrass = new Grass(newX, newY, 1);
                    grassArr.push(newGrass);
                    this.x = newX;
                    this.y = newY;
                    this.energy--;
                    this.a++;
                }
                else if (this.a > 10) {
                    matrix[this.y][this.x] = 1;
                    matrix[newY][newX] = 5;
                    var newVoshxar = new voshxar(newX, newY, 2);
                    voshxarArr.push(newVoshxar);
                    this.x = newX;
                    this.y = newY;
                    this.energy--;
                    this.a = 0
                }
            }
            else {
                matrix[this.y][this.x] = 1;
                matrix[newY][newX] = 5;
                this.x = newX;
                this.y = newY;
                this.energy--;
                this.a++;
            }
        }
    }
    eat() {

        this.getNewCoordinates();
        var amenCells = this.chooseCellmul([4]);
        var newCell = random(amenCells);
        if (newCell) {
            matrix[this.y][this.x] = 0;


            matrix[newCell[1]][newCell[0]] = 5;
            for (var i in amenakerArr) {
                if (newCell[0] == amenakerArr[i].x && newCell[1] == amenakerArr[i].y) {
                    amenakerArr.splice(i, 1);
                    //console.log("kerav");
                    break;
                }
            }
            this.x = newCell[0];
            this.y = newCell[1];

            this.energy += 2;
            //this.eat ++;
        }
        if (this.energy >= 0 || this.energy <= 0) {
            this.move();
        }
    }
}