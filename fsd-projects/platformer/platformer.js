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
     createPlatform(130, 700, 45, 20);
     createPlatform(200, 680, 45, 20, "cyan");
     createPlatform(270, 655, 45, 20, "cyan");
     createPlatform(330, 615, 45, 20, "cyan");
     createPlatform(420, 625, 45, 20, "white");
     createPlatform(520, 625, 45, 20, "white");
     createPlatform(620, 625, 45, 20, "white");
     createPlatform(720, 625, 45, 20, "white");
     createPlatform(820, 625, 45, 20, "white");
     createPlatform(920, 625, 45, 20, "white");
     createPlatform(1020, 625, 45, 20, "white");
     createPlatform(1100, 605, 45, 20, "cyan");
     createPlatform(1170, 569, 45, 20, "cyan");
     createPlatform(1250, 549, 45, 20, "cyan");
     createPlatform(1335, 500, 45, 20);
    // TODO 3 - Create Collectables
    createCollectable("diamond", 1337, 300, 0.2, 0);
    createCollectable("kennedi", 730, 550, 0, 0);
    createCollectable("database", 730, 100, 0.2, 1);
    createCollectable ("grace", 730, 500, 0, 0);
    createCollectable("max", 178, 580, 0, 0);
    createCollectable("steve", 1179, 470, 0, 0);
    // TODO 4 - Create Cannons
    createCannon("top", 810, 1100);
    createCannon("bottom", 610, 1000);
    createCannon("left", 420, 1100);
    createCannon("bottom", 760, 1000);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
