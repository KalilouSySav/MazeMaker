export default class MazeView {
    constructor(canvasId, maze, cellSize = 25) {
      this.canvas = document.getElementById(canvasId);
      this.context = this.canvas.getContext('2d');
      this.maze = maze;
      this.cellSize = cellSize;
      this.canvasWidth = this.maze.width * this.cellSize;
      this.canvasHeight = this.maze.height * this.cellSize;
      this.canvas.width = this.canvasWidth;
      this.canvas.height = this.canvasHeight;
    }
  
    render() {
        const ctx = this.context;
        const cellSize = this.cellSize;
        const maze = this.maze;
    
        // Clear the canvas
        ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    
        for (let row = 0; row < maze.height; row++) {
          for (let col = 0; col < maze.width; col++) {
            const cell = maze.cells[row][col];
            const x = col * cellSize;
            const y = row * cellSize;
    
            // Draw walls and passages based on cell's properties
            if (cell.entrance) {
                ctx.fillStyle = "green";
            } else if (cell.exit) {
                ctx.fillStyle = "blue";
            } else {
                ctx.fillStyle = cell.visited ? 'white' : 'black';
            }

            // ctx.fillStyle = cell.visited ? 'white' : 'black';
            ctx.fillRect(x, y, cellSize, cellSize);
    
            // Draw walls
            ctx.fillStyle = 'black';
            if (cell.walls.top) ctx.fillRect(x, y, cellSize, 1);
            if (cell.walls.right) ctx.fillRect(x + cellSize - 1, y, 1, cellSize);
            if (cell.walls.bottom) ctx.fillRect(x, y + cellSize - 1, cellSize, 1);
            if (cell.walls.left) ctx.fillRect(x, y, 1, cellSize);
          }
        }
      }
  }
  