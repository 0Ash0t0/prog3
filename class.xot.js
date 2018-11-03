class Grass extends Base {
    mul() {
        this.multiply++;
        var emptyCells = this.chooseCellmul([0]);
        var newCell = random(emptyCells);
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
