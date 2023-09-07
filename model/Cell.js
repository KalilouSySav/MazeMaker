
export default class Cell {
    constructor(row, col) {
      this.row = row;
      this.col = col;
      this.walls = {
        top: true,
        right: true,
        bottom: true,
        left: true
      };
      this.visited = false;
      this.entrance = false;
      this.exit = false;
    }
  }
  