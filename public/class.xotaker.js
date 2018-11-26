class Voshxar extends Base {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 8;
        this.gender = Math.round(Math.random())
    }

    chooseCellmul(arr) {
        this.getNewCoordinates();
        return super.chooseCellmul(arr);
    }

    eat() {
        this.getNewCoordinates();
        var grassCells = this.chooseCellmul([1]);
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
        if (this.energy >= 10) {
            this.mul();
        }

        else if (this.energy <= 0) {
            this.die();
        }
    }
    move() {
        var emptyCells = this.chooseCellmul([0]);
        var newCell = random(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;

            this.x = newX;
            this.y = newY;
            this.energy -= 5;
        }
        else {
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
        if(exanak == "Գարուն"){
            var m = 5 
        }
        else{
            var m = 10 
        }
        if (this.gender == 0) {
            var g = 1
        }
        else {
            var g = 0
        }
        var voshxarner = this.chooseCellmul([2])
        for (var i in voshxarner) {
            for (var l in voshxarArr) {
                if(voshxarArr[l].y == voshxarner[i][1] && voshxarArr[l].x == voshxarner[i][0]){
                    if (voshxarArr[l].gender == g) {
                        var bex = []
                        bex.push(voshxarArr[l])
                        for (var k in bex) {
                            if (bex[k].energy >= m) {
                                var emptyCells = this.chooseCellmul([0]);
                                var newCell = random(emptyCells);
                                if (newCell) {
                                    var newX = newCell[0];
                                    var newY = newCell[1];
                                    matrix[newY][newX] = this.index;
                                    var newVoshxar = new Voshxar(newX, newY, this.index);
                                    voshxarArr.push(newVoshxar);
                                    this.energy = 7;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}