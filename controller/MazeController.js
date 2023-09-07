import Maze from '../model/Maze.js';
import MazeView from '../view/MazeView.js';

export default class MazeController {
  constructor() {
    this.maze = null;
    this.mazeView = null;
  }

  init() {
    const width = 21; // Number of cells horizontally
    const height = 21; // Number of cells vertically

    this.maze = new Maze(width, height);
    this.mazeView = new MazeView('mazeCanvas', this.maze);
    this.mazeView.render();

     // Add event listeners to control buttons
     const generateButton = document.getElementById('generateMaze');
     const printButton = document.getElementById('printMaze');
    //  const solveButton = document.getElementById('solveMaze');
    //  const clearButton = document.getElementById('clearMaze');
    //  const saveButton = document.getElementById('saveMaze');
 
     generateButton.addEventListener('click', () => {
       // Handle maze generation logic
       let width = document.getElementById('mazeWidth').value;
       let height = document.getElementById('mazeHeight').value;
       const size = document.getElementById('cellSize').value;
   
        if (width % 2 === 0 ) {
           width++;
         }

       if (height % 2 === 0) {
           height++;
        }

       this.maze = new Maze(width, height);
       this.mazeView = new MazeView('mazeCanvas', this.maze, size);
       this.mazeView.render();
   
     });

    printButton.addEventListener('click', () => {
        // Handle printing logic
        window.print();
    });
  }
}