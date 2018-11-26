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
            [this.x - 2, this.y - 2],

            [this.x, this.y + 3],
            [this.x - 1, this.y + 3],
            [this.x - 2, this.y + 3],
            [this.x - 3, this.y + 3],
            [this.x + 1, this.y + 3],
            [this.x + 2, this.y + 3],
            [this.x + 3, this.y + 3],

            [this.x + 3, this.y + 2],
            [this.x - 3, this.y + 2],
            [this.x + 3, this.y + 1],
            [this.x - 3, this.y + 1],
            [this.x + 3, this.y],
            [this.x - 3, this.y],
            [this.x + 3, this.y - 1],
            [this.x - 3, this.y - 1],
            [this.x + 3, this.y - 2],
            [this.x - 3, this.y - 2],

            [this.x, this.y - 3],
            [this.x - 1, this.y - 3],
            [this.x - 2, this.y - 3],
            [this.x - 3, this.y - 3],
            [this.x + 1, this.y - 3],
            [this.x + 2, this.y - 3],
            [this.x + 3, this.y - 3],

            [this.x, this.y + 4],
            [this.x - 1, this.y + 4],
            [this.x - 2, this.y + 4],
            [this.x - 3, this.y + 4],
            [this.x - 4, this.y + 4],
            [this.x + 1, this.y + 4],
            [this.x + 2, this.y + 4],
            [this.x + 3, this.y + 4],
            [this.x + 4, this.y + 4],

            [this.x + 4, this.y + 3],
            [this.x - 4, this.y + 3],
            [this.x + 4, this.y + 2],
            [this.x - 4, this.y + 2],
            [this.x + 4, this.y + 1],
            [this.x - 4, this.y + 1],
            [this.x + 4, this.y],
            [this.x - 4, this.y],
            [this.x + 4, this.y - 2],
            [this.x - 4, this.y - 2],
            [this.x + 4, this.y - 1],
            [this.x - 4, this.y - 1],
            [this.x + 4, this.y - 3],
            [this.x - 4, this.y - 3],

            [this.x, this.y - 4],
            [this.x - 1, this.y - 4],
            [this.x - 2, this.y - 4],
            [this.x - 3, this.y - 4],
            [this.x - 4, this.y - 4],
            [this.x + 1, this.y - 4],
            [this.x + 2, this.y - 4],
            [this.x + 3, this.y - 4],
            [this.x + 4, this.y - 4],

            [this.x, this.y + 5],
            [this.x - 1, this.y + 5],
            [this.x - 2, this.y + 5],
            [this.x - 3, this.y + 5],
            [this.x - 4, this.y + 5],
            [this.x - 5, this.y + 5],
            [this.x + 1, this.y + 5],
            [this.x + 2, this.y + 5],
            [this.x + 3, this.y + 5],
            [this.x + 4, this.y + 5],
            [this.x + 5, this.y + 5],


            [this.x + 5, this.y + 4],
            [this.x - 5, this.y + 4],
            [this.x + 5, this.y + 3],
            [this.x - 5, this.y + 3],
            [this.x + 5, this.y + 2],
            [this.x - 5, this.y + 2],
            [this.x + 5, this.y + 1],
            [this.x - 5, this.y + 1],
            [this.x + 5, this.y],
            [this.x - 5, this.y],
            [this.x + 5, this.y - 2],
            [this.x - 5, this.y - 2],
            [this.x + 5, this.y - 1],
            [this.x - 5, this.y - 1],
            [this.x + 5, this.y - 3],
            [this.x - 5, this.y - 3],
            [this.x + 5, this.y - 4],
            [this.x - 5, this.y - 4],

            [this.x, this.y - 5],
            [this.x - 1, this.y - 5],
            [this.x - 2, this.y - 5],
            [this.x - 3, this.y - 5],
            [this.x - 4, this.y - 5],
            [this.x - 5, this.y - 5],
            [this.x + 1, this.y - 5],
            [this.x + 2, this.y - 5],
            [this.x + 3, this.y - 5],
            [this.x + 4, this.y - 5],
            [this.x + 5, this.y - 5],

            [this.x, this.y + 6],
            [this.x - 1, this.y + 6],
            [this.x - 2, this.y + 6],
            [this.x - 3, this.y + 6],
            [this.x - 4, this.y + 6],
            [this.x - 5, this.y + 6],
            [this.x - 6, this.y + 6],
            [this.x + 1, this.y + 6],
            [this.x + 2, this.y + 6],
            [this.x + 3, this.y + 6],
            [this.x + 4, this.y + 6],
            [this.x + 5, this.y + 6],
            [this.x + 6, this.y + 6],

            [this.x + 6, this.y + 5],
            [this.x - 6, this.y + 5],
            [this.x + 6, this.y + 4],
            [this.x - 6, this.y + 4],
            [this.x + 6, this.y + 3],
            [this.x - 6, this.y + 3],
            [this.x + 6, this.y + 2],
            [this.x - 6, this.y + 2],
            [this.x + 6, this.y + 1],
            [this.x - 6, this.y + 1],
            [this.x + 6, this.y],
            [this.x - 6, this.y],
            [this.x + 6, this.y - 2],
            [this.x - 6, this.y - 2],
            [this.x + 6, this.y - 1],
            [this.x - 6, this.y - 1],
            [this.x + 6, this.y - 3],
            [this.x - 6, this.y - 3],
            [this.x + 6, this.y - 4],
            [this.x - 6, this.y - 4],
            [this.x + 6, this.y - 5],
            [this.x - 6, this.y - 5],
            
            [this.x, this.y - 6],
            [this.x - 1, this.y - 6],
            [this.x - 2, this.y - 6],
            [this.x - 3, this.y - 6],
            [this.x - 4, this.y - 6],
            [this.x - 5, this.y - 6],
            [this.x - 6, this.y - 6],
            [this.x + 1, this.y - 6],
            [this.x + 2, this.y - 6],
            [this.x + 3, this.y - 6],
            [this.x + 4, this.y - 6],
            [this.x + 5, this.y - 6],
            [this.x + 6, this.y - 6]

        ]
    }
    boom() {
        var emptyCells = this.chooseCellmul([0, 1, 2, 3, 5]);
        if (emptyCells) {
            for (var i in emptyCells) {
                var newX = emptyCells[i][0];
                var newY = emptyCells[i][1];
                if (matrix[newY][newX] == 1) {
                    for (var l in grassArr) {
                        if (newX == grassArr[l].x && newY == grassArr[l].y) {
                            matrix[newY][newX] = 0;
                            grassArr.splice(l, 1);
                        }
                    }
                }
                else if (matrix[newY][newX] == 2) {
                    for (var i in voshxarArr) {
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
                else if (matrix[newY][newX] == 4) {
                    for (var i in amenakerArr) {
                        if (newX == amenakerArr[i].x && newY == amenakerArr[i].y) {
                            matrix[newY][newX] = 0;
                            amenakerArr.splice(i, 1);
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