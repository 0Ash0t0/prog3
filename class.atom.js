class Atom extends Base {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 7;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],

            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x - 2, this.y + 2],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y],
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y - 2]

        ]
    }
    boom() {
        var emptyCells = this.chooseCellmul([0, 1, 2, 3, 5]);
        if (emptyCells.length > 0) {
            for (var i in emptyCells) {
                var newX = emptyCells[i][0];
                var newY = emptyCells[i][1];
                if (matrix[newY][newX] == 1) {
                    for (var i in grassArr) {
                        if (newX == grassArr[i].x && newY == grassArr[i].y) {
                            matrix[newY][newX] = 0;
                            grassArr.splice(i, 1);
                        }
                    }
                }

                else if (matrix[newY][newX] == 2) {
                    for (var i in voshxarArr ) {
                        if (newX == voshxarArr[i].x && newY == voshxarArr[i].y) {
                            matrix[newY][newX] = 0;
                            voshxarArr.splice(i, 1);
                        }
                    }
                }

                else if (matrix[newY][newX] == 3) {
                    for (var i in gishatichArr) {
                        if (newX == gishatichArr[i].x && newY == gishatichArr[i].y) {
                            matrix[newY][newX] = 0;
                            gishatichArr.splice(i, 1);
                        }
                    }
                }

                else if (matrix[newY][newX] == 5) {
                    for (var i in fermerArr) {
                        if (newX == fermerArr[i].x && newY == fermerArr[i].y) {
                            matrix[newY][newX] = 0;
                            fermerArr.splice(i, 1);
                        }
                    }
                }
                atomArr.splice(0, 1);
            }
        }
        matrix[this.y][this.x] = 0;
    }
}