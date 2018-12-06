class Amenaker extends Base {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 30;
    }

    chooseCellmul(arr) {
        this.getNewCoordinates();
        return super.chooseCellmul(arr);
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
                    if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                        gishatichArr.splice(i, 1);
                        this.energy++;
                        break;
                    }
                }
            }
            else if (matrix[newCell[1]][newCell[0]] == 2) {
                for (var i in voshxarArr) {
                    if (this.x == voshxarArr[i].x && this.y == voshxarArr[i].y) {
                        matrix[this.y][this.x] = 0;
                        voshxarArr.splice(i, 1);
                        break;
                    }
                }
            }
            else if (matrix[newCell[1]][newCell[0]] == 1) {
                for (var i in grassArr) {
                    if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                        grassArr.splice(i, 1);
                        this.energy++;
                        break;
                    }
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