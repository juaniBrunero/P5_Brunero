function Spot(i, j) {

  this.i = i;
  this.j = j;

  this.walls = [true, true, true, true];

  this.visited = false;

  this.f = 0;
  this.g = 0;
  this.h = 0;

  this.neighbors = [];

  this.previous = undefined;

  this.noWall = function(i, j){
    var x = this.i - i;
    if (x === 1 && this.walls[3] == true) {
      return true;
    } else if (x === -1 && this.walls[1] == true) {
      return true;
    }
    var y = this.j - j;
    if (y === 1  && this.walls[0] == true) {
      return true;
    } else if (y === -1 && this.walls[2] == true) {
      return true;
    }
    return false;
  }

  this.show = function() {
    var x = this.i*w;
    var y = this.j*w;
    stroke(255);
    strokeWeight(1);
    if (this.walls[0]) {
      line(x    , y    , x + w, y);
    }
    if (this.walls[1]) {
      line(x + w, y    , x + w, y + w);
    }
    if (this.walls[2]) {
      line(x + w, y + w, x    , y + w);
    }
    if (this.walls[3]) {
      line(x    , y + w, x    , y);
    }

    if (this.visited) {
      noStroke();
      fill(0, 255, 0, 100);
      rect(x, y, w, w);
    }
  }

  this.checkNeighbors = function() {
    var neighbors = [];

    if (j > 0) {
      var top    = grid[i][j -1];
    }

    if (i < cols-1) {
      var right  = grid[i+1][j];
    }

    if (j < rows-1) {
      var bottom = grid[i][j+1];
    }

    if (i > 0) {
      var left   = grid[i-1][j];
    }

    if (top && !top.visited) {
      neighbors.push(top);
    }
    if (right && !right.visited) {
      neighbors.push(right);
    }
    if (bottom && !bottom.visited) {
      neighbors.push(bottom);
    }
    if (left && !left.visited) {
      neighbors.push(left);
    }

    if (neighbors.length > 0) {
      var r = floor(random(0, neighbors.length));
      return neighbors[r];
    } else {
      return undefined;
    }


  }

  this.addNeighbors = function(grid) {
    var i = this.i;
    var j = this.j;
    if (i < cols - 1) {
      this.neighbors.push(grid[i + 1][j]);
    }
    if (i > 0) {
      this.neighbors.push(grid[i - 1][j]);
    }
    if (j < rows - 1) {
      this.neighbors.push(grid[i][j + 1]);
    }
    if (j > 0) {
      this.neighbors.push(grid[i][j - 1]);
    }

    //PERMITE ALGUNA DE LAS ESQUINAS OCUPADAS
    /*
    if (i > 0 && j > 0 && !(grid[i - 1][j].wall && grid[i][j - 1].wall)) {
      this.neighbors.push(grid[i - 1][j - 1]);
    }
    if (i < cols - 1 && j > 0 && !(grid[i + 1][j].wall && grid[i][j - 1].wall)) {
      this.neighbors.push(grid[i + 1][j - 1]);
    }
    if (i > 0 && j < rows - 1 && !(grid[i - 1][j].wall && grid[i][j + 1].wall)) {
      this.neighbors.push(grid[i - 1][j + 1]);
    }
    if (i < cols - 1 && j < rows - 1 && !(grid[i + 1][j].wall && grid[i][j + 1].wall)) {
      this.neighbors.push(grid[i + 1][j + 1]);
    }

    //SIN ESQUINAS OCUPADAS
    if (i > 0 && j > 0 && !(grid[i - 1][j].wall || grid[i][j - 1].wall)) {
      this.neighbors.push(grid[i - 1][j - 1]);
    }
    if (i < cols - 1 && j > 0 && !(grid[i + 1][j].wall || grid[i][j - 1].wall)) {
      this.neighbors.push(grid[i + 1][j - 1]);
    }
    if (i > 0 && j < rows - 1 && !(grid[i - 1][j].wall || grid[i][j + 1].wall)) {
      this.neighbors.push(grid[i - 1][j + 1]);
    }
    if (i < cols - 1 && j < rows - 1 && !(grid[i + 1][j].wall || grid[i][j + 1].wall)) {
      this.neighbors.push(grid[i + 1][j + 1]);
    }*/
  }
}
