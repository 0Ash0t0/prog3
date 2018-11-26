class Fermer extends Base {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 10;
        this.a = 0;
    }
    chooseCellmul(arr) {
        this.getNewCoordinates();
        return super.chooseCellmul(arr);
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
                    var newVoshxar = new Voshxar(newX, newY, 2);
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