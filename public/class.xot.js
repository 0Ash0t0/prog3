class Grass extends Base {
    mul() {
        this.multiply++;
        var emptyCells = this.chooseCellmul([0]);
        var newCell = random(emptyCells);
        if (exanak != "Ձմեռ"){
            var k = 5;
        }
        else if (exanak != "Ձմեռ"){
            var k = 15;
        }
            if (newCell && this.multiply >= k) {
                var newX = newCell[0];
                var newY = newCell[1];
                matrix[newY][newX] = this.index;

                var newGrass = new Grass(newX, newY, this.index);
                grassArr.push(newGrass);
                this.multiply = 0;
            }
    }
    
}
