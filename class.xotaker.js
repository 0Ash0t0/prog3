class Voshxar extends Base {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 8;
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
        if (this.energy == 10) {
            this.mul();
        }

        else if (this.energy <= 0) {
            this.die();
        }
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
        var emptyCells = this.chooseCellmul([0]);
        var newCell = random(emptyCells);

        // console.log(emptyCells);
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