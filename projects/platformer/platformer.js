$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, canvas.height, -1, -canvas.height);
    // }
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(canvas.width, i, -canvas.width, -1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////
    

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height) 
    
   createPlatform(500, 300, 200, 30); // Long and wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
   createPlatform(200, 630, 80, 10);
   createPlatform(300, 530, 80, 10);
   createPlatform(400, 430, 80, 10);
   createPlatform(640, 230, 10, 100);
  
   createPlatform(30, 530, 100, 10);
   createPlatform(900, 330, 100, 10);
   createPlatform(1000, 430, 100, 10);
   createPlatform(1100, 530, 100, 10);
   createPlatform(200, 630, 200, 10);
   createPlatform(1400, 530, 10, 100);
   createPlatform(30, 530, 50, 400);
   createPlatform(300, 530, 800, 4000);


    
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    createCollectable("steve", 500, 30); // creates a "steve" collectible at the coordinates (500, 300), falling with a high gravity of 20, and bouncing with 50% bounce  
    createCollectable("grace", 600, 100); // creates a "grace" collectible at the coordinates (500, 300), falling with default gravity and bouncing with default bounce %
    createCollectable("max", 400, 10); // creates a "max" collectible at the coordinates (500, 300), falling with default gravity and bouncing with default bounce %
    "database" 
    "max" 
    "steve" 
    "grace" 
    "kennedi" 
 




    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
    createCannon("top", 600 , 1000);
    createCannon("top", 300 , 1000);
    createCannon("top", 800 , 1000);
    createCannon("top", 1000 , 1000);
    createCannon("bottom", 100, 1000); // cannon on left wall, 600px down, shooting once per second
    createCannon("left", 600, 100);



    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
