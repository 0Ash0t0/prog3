class Gishatich extends Base {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 7;
        this.gender = Math.round(Math.random())
    }
    chooseCellmul(arr) {
        this.getNewCoordinates();
        return super.chooseCellmul(arr);
    }
    move() {
        var emptyCells = this.chooseCellmul([0]);
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
        if (this.gender == 0) {
            var g = 1
        }
        else {
            var g = 0
        }
        var gishatichner = this.chooseCellmul([3])
        for (var i in gishatichner) {
            for (var l in gishatichArr) {
                if (gishatichArr[l].y == gishatichner[i][1] && gishatichArr[l].x == gishatichner[i][0]) {
                    if (gishatichArr[l].gender == g) {
                        var beg = []
                        bex.push(gishatichArr[l])
                        for (var k in beg) {
                            if (beg[k].energy >= 10) {
                                var emptyCells = this.chooseCellmul([0]);
                                var newCell = random(emptyCells);

                                // console.log(emptyCells);
                                if (newCell) {
                                    var newX = newCell[0];
                                    var newY = newCell[1];
                                    matrix[newY][newX] = this.index;

                                    var newGishatich = new Gishatich(newX, newY, this.index);
                                    gishatichArr.push(newGishatich);
                                    this.energy = 3;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    eat() {
        this.getNewCoordinates();
        var gishatichCells = this.chooseCellmul([2]);
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
        if (ex == "Գարուն") {
            var m = 6
        }
        else {
            var m = 10
        }
        if (this.energy >= m) {
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