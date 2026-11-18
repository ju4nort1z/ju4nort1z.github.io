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

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
     createPlatform(48, 300, 48, 16);
     createPlatform(135, 400, 48, 16, "cyan");
     createPlatform(245, 400, 48, 16, "cyan");
     createPlatform(325, 300, 48, 16, "cyan");
     createPlatform(410, 300, 48, 16, "white");
     createPlatform(505, 349, 48, 16, "white");
     createPlatform(605, 349, 48, 16, "white");
     createPlatform(700, 349, 108, 20, "white");
     createPlatform(860, 349, 48, 16, "white");
     createPlatform(950, 349, 48, 16, "white");
     createPlatform(1040, 300, 48, 16, "white");
     createPlatform(1125, 300, 48, 16, "cyan");
     createPlatform(1215, 300, 48, 16, "cyan");
     createPlatform(1275, 300, 48, 16, "cyan");
     createPlatform(1353, 300, 45, 20);
    // TODO 3 - Create Collectables
    createCollectable("diamond", 1355, 150, 0.2, 0);
    createCollectable("kennedi", 790, 300, 0, 0);
    createCollectable("database", 730, 100, 0.2, 1);
    createCollectable ("grace", 672, 300, 0, 0);
    createCollectable("max", 186, 300, 0, 0);
    createCollectable("steve", 1179, 200, 0, 0);
    // TODO 4 - Create Cannons
    createCannon("top", 1090, 1500);
    createCannon("bottom", 435, 1200);
    createCannon("left", 100, 1200);
    createCannon("bottom", 955, 1500);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
