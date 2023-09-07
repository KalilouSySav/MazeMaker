import Cell from '../model/Cell.js'; 

export default class Maze {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.cells = this.initializeCells();
      this.generateMaze();
      this.addEntranceAndExit();
    }

    initializeCells() {
        // Initialize the maze with cells
        const cells = [];
        for (let row = 0; row < this.height; row++) {
          const rowCells = [];
          for (let col = 0; col < this.width; col++) {
            rowCells.push(new Cell(row, col));
          }
          cells.push(rowCells);
        }
        return cells;
      }
  
    generateMaze() {
      // Maze generation logic using the recursive backtracker algorithm
        const cells = this.cells;
        const stack = [];
        let currentCell = cells[0][0];
        currentCell.visited = true;
    
        const backtrack = () => {
          if (stack.length > 0) {
            currentCell = stack.pop();
          }
        };
    
        const checkNeighbors = (cell) => {
          const neighbors = [];
    
          const { row, col } = cell;
    
          const directions = [
            { row: row - 2, col }, // Top
            { row, col: col + 2 }, // Right
            { row: row + 2, col }, // Bottom
            { row, col: col - 2 }  // Left
          ];
    
          directions.forEach((dir) => {
            const { row, col } = dir;
            if (row >= 0 && row < this.height && col >= 0 && col < this.width) {
              const neighbor = cells[row][col];
              if (!neighbor.visited) {
                neighbors.push(neighbor);
              }
            }
          });
    
          if (neighbors.length > 0) {
            return neighbors[Math.floor(Math.random() * neighbors.length)];
          } else {
            return null;
          }
        };
    
        while (true) {
          const nextCell = checkNeighbors(currentCell);
    
          if (nextCell) {
            const { row, col } = nextCell;
            const wallRow = (currentCell.row + row) / 2;
            const wallCol = (currentCell.col + col) / 2;
    
            cells[row][col].visited = true;
            cells[wallRow][wallCol].visited = true;
    
            stack.push(currentCell);
    
            currentCell = nextCell;
          } else if (stack.length > 0) {
            backtrack();
          } else {
            break;
          }
        }
    
        return cells;
    }

    addEntranceAndExit() {
        // Set the entrance at the top-left corner
        this.cells[0][0].entrance = true;
      
        // Set the exit at the bottom-right corner
        this.cells[this.height - 1][this.width - 1].exit = true;
      }
  }
  